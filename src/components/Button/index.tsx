import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import styles from './styles';

const Button: React.FC<TouchableOpacityProps> = ({children, style, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
