import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns'

export interface Plant {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
}

interface StoragePlant {
  [id: string]: {
    data: Plant;
  }
}

export const savePlant = async (plant: Plant): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
      },
    };

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({ ...oldPlants, ...newPlant }));
  } catch (error) {
    throw new Error(error);
  }
};

export const loadPlants = async (): Promise<Plant[]> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant) : {};

    const sortedPlants = Object.keys(plants).map(plant => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm'),
      };
    }).sort((a, b) => 
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 
          - Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)));

    return sortedPlants;
  } catch (error) {
    throw new Error(error);
  }
};