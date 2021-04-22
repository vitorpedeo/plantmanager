import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingVertical: 10,
    maxWidth: '45%',
    borderRadius: 20,
    backgroundColor: colors.shape,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

export default styles;