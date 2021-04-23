import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { Plant } from '../../libs/storage';

import Header from '../../components/Header';
import EnvironmentButton from '../../components/EnvironmentButton';
import PrimaryPlantCard from '../../components/PrimaryPlantCard';
import Loading from '../../components/Loading';

import styles from './styles';

interface Environment {
  key: string;
  title: string;
}

const PlantSelection: React.FC = () => {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [activeEnvironment, setActiveEnvironment] = useState('all');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const { navigate } = useNavigation();

  useEffect(() => {
    const fetchEnvironments = async () => {
      const { data } = await api.get<Environment[]>('plants_environments', {
        params: {
          _sort: 'title',
          _order: 'asc',
        }
      });

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    };

    fetchEnvironments();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    const { data } = await api.get<Plant[]>('plants', 
    { 
      params: {
        _page: page,
        _limit: 8,
        _sort: 'name',
        _order: 'asc',
      } 
    });

    if (!data) {
      setLoading(false);
      return;
    }

    if (page > 1) {
      setPlants(prevState => [...prevState, ...data]);
      setFilteredPlants(prevState => [...prevState, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  };

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(prevState => prevState + 1);
    fetchPlants();
  };

  const handleEnvironmentSelection = (environmentKey: string) => {
    setActiveEnvironment(environmentKey);

    if (environmentKey === 'all') {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter(plant => plant.environments.includes(environmentKey));

      setFilteredPlants(filtered);
    }
  };

  const handlePlantSelection = (plant: Plant) => {
    navigate('PlantSave', { plant });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerMode="greeting" />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList 
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} active={activeEnvironment === item.key} onPress={() => handleEnvironmentSelection(item.key)} />
          )}
          keyExtractor={item => String(item.key)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList 
          data={filteredPlants} 
          renderItem={({ item }) => (
            <PrimaryPlantCard data={item} onPress={() => handlePlantSelection(item)} />
          )}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color="#32B768"/> : null
          }
        />
      </View>
    </View>
  );
};

export default PlantSelection;
