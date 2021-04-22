import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';

import styles from './styles';

const Welcome: React.FC = () => {
  const { navigate } =  useNavigation();

  const handleNavigation = () => {
    navigate('UserIdentification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image source={wateringImg} resizeMode="contain" style={styles.image} />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Feather name="chevron-right" color="#fff" size={28} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
