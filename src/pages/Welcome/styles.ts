import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    marginTop: 20,
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 38,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;