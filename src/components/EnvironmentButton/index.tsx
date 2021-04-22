import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}; 

const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({ children, title, active = false, ...rest }) => {
  return (
    <RectButton style={[styles.container, active && styles.activeContainer]} {...rest}>
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </RectButton>
  );
};

export default EnvironmentButton;
