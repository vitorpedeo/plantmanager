import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert, 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button';

import colors from '../../styles/colors';
import styles from './styles';

const UserIdentification: React.FC = () => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { navigate } = useNavigation();
 
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  
  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputChange = (value: string) => {
    setName(value);
    setIsFilled(!!value);
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('@plantmanager:username', name);
  
      navigate('Confirmation', { 
        title: 'Prontinho', 
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.', 
        buttonTitle: 'Começar', 
        icon: 'smile', 
        nextScreen: 'PlantSelection' 
      });
    } catch (error) {
      Alert.alert('Não foi possível salvar seu nome no momento. Por favor, tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.keyboardView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃'}
                </Text>

                <Text style={styles.text}>
                  Como podemos {'\n'} 
                  chamar você?
                </Text>
              </View>

              <TextInput 
                placeholder="Digite seu nome" 
                value={name}
                onChangeText={handleInputChange}
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur} 
                style={[styles.input, (isFocused || isFilled) && {
                  borderColor: colors.green,
                }]} 
              />

              <View style={styles.footer}>
                <Button onPress={handleSubmit} style={!name && { backgroundColor: colors.green_light }} disabled={!name}>
                  Confirmar
                </Button>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default UserIdentification;
