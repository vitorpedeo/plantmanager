import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Plant, loadPlants } from '../../libs/storage';

import Header from '../../components/Header';
import SecondaryPlantCard from '../../components/SecondaryPlantCard';

import waterDropImg from '../../assets/waterdrop.png';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

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
    };

    loadStorageData();
  }, [])

  return (
    <View style={styles.container}>
      <Header />

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
            <SecondaryPlantCard data={item}>Planta</SecondaryPlantCard>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default MyPlants;
