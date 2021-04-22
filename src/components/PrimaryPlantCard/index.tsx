import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import styles from './styles';

interface PrimaryPlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PrimaryPlantCard: React.FC<PrimaryPlantCardProps> = ({ data, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text style={styles.text}>
        {data.name}
      </Text>
    </RectButton>
  );
};

export default PrimaryPlantCard;
