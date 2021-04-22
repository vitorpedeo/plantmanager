import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    color: colors.heading,
    fontSize: 32,
    fontFamily: fonts.text,
  },
  userName: {
    color: colors.heading,
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 36,
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

export default styles;