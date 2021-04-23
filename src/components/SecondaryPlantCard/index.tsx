import React from 'react';
import { View, Text, Animated } from 'react-native';
import { Swipeable, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface SecondaryPlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

const SecondaryPlantCard: React.FC<SecondaryPlantCardProps> = ({ data, handleRemove, ...rest }) => {
  return (
    <Swipeable 
      overshootRight={false} 
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.removePlant} onPress={handleRemove}>
              <Feather name="trash" size={32} color="#fff" />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Text style={styles.title}>
          {data.name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
};

export default SecondaryPlantCard;
