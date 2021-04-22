import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';

interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  smile: '😁',
  hug: '🤗',
};

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { title, subtitle, buttonTitle, icon, nextScreen } = route.params as ConfirmationParams;

  const handleConfirmation = () => {
    navigate(nextScreen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button onPress={handleConfirmation}>
            {buttonTitle}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Confirmation;
