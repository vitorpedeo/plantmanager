import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    width: 75,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  activeText: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

export default styles;