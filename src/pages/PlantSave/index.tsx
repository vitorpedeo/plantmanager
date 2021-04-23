import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Platform, Alert, TouchableOpacity } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import { Plant, savePlant } from '../../libs/storage';

import Button from '../../components/Button';

import waterDropImg from '../../assets/waterdrop.png';
import styles from './styles';

interface Params {
  plant: Plant;
};

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const { navigate } = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  const handleDateTimeChange = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(prevState => !prevState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      Alert.alert('Escolha um horário no futuro ⏰');
      return;
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleOpenAndroidDateTimePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };

  const handlePlantSave = async () => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigate('Confirmation', { 
        title: 'Tudo certo', 
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.', 
        buttonTitle: 'Muito obrigado :D', 
        icon: 'hug', 
        nextScreen: 'MyPlants' 
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar a planta no momento. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} width={150} height={150} />

          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>
            {plant.about}
          </Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterDropImg} style={styles.tipImage} />
            <Text style={styles.tipText}>
              {plant.water_tips}
            </Text>
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
          </Text>

          {showDatePicker && <DateTimePicker value={selectedDateTime} mode="time" display="spinner" onChange={handleDateTimeChange} />}

          {Platform.OS === 'android' && (
            <TouchableOpacity onPress={handleOpenAndroidDateTimePicker} style={styles.dateTimePickerButton}>
              <Text style={styles.dateTimePickerText}>{`Horário: ${format(selectedDateTime, 'HH:mm')}`}</Text>
            </TouchableOpacity>
          )}

          <Button onPress={handlePlantSave}>
            Cadastrar planta
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlantSave;
