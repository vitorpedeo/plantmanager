import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../../assets/user.jpeg';
import styles from './styles';

interface HeaderProps {
  headerMode: 'greeting' | 'plants';
}

const Header: React.FC<HeaderProps> = ({ headerMode }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadUserName = async () => {
      const savedUserName = await AsyncStorage.getItem('@plantmanager:username');

      setUserName(savedUserName || '');
    };

    loadUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{headerMode === 'greeting' ? 'Olá,' : 'Minhas'}</Text>
        <Text style={styles.userName}>{headerMode === 'greeting' ? userName : 'Plantinhas'}</Text>
      </View>

      <Image source={userImg} style={styles.userImage} />
    </View>
  );
};

export default Header;
