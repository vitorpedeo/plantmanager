import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../assets/load.json';
import styles from './styles';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <LottieView source={loadingAnimation} autoPlay loop style={styles.animation} />
    </View>
  );
};

export default Loading;
