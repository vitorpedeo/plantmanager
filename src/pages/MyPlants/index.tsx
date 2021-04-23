import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Plant, loadPlants, removePlant } from '../../libs/storage';

import Header from '../../components/Header';
import SecondaryPlantCard from '../../components/SecondaryPlantCard';
import Loading from '../../components/Loading';

import waterDropImg from '../../assets/waterdrop.png';
import styles from './styles';

const MyPlants: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedPlants = await loadPlants();

      const nextWaterTime = formatDistance(
        new Date(storagedPlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR,
        }
        );

        setNextWatered(`Não esquece de regar a ${storagedPlants[0].name} à ${nextWaterTime}.`);
        setPlants(storagedPlants);
        setLoading(false);
    };

    loadStorageData();
  }, []);

  const handleRemove = (plant: Plant) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🤚🏻',
        style: 'cancel',
      },
      {
        text: 'Sim 👍🏻',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setPlants(prevState => prevState.filter(item => item.id !== plant.id));
          } catch (error) {
            Alert.alert(`Não foi possível remover a ${plant.name} no momento.`);
          }
        },
      },
    ]);
  };

  if (loading) {
    return <Loading />;
  };

  return (
    <View style={styles.container}>
      <Header headerMode="plants" />

      <View style={styles.spotlight}>
        <Image source={waterDropImg} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.myPlants}>
        <Text style={styles.myPlantsTitle}>Próximas regadas</Text>
        <FlatList 
          data={plants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <SecondaryPlantCard data={item} handleRemove={() => handleRemove(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default MyPlants;
