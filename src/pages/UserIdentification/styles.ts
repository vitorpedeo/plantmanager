import { Platform, StatusBar, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  keyboardView: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    width: '100%',
    flex: 1,
  },
  form: {
    paddingHorizontal: 54,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  text: {
    marginVertical: 30,
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 32,
  },
  input: {
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%',
  },
});

export default styles;