import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    marginTop: 15,
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.heading,
    lineHeight: 20,
  },
  subtitle: {
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  environmentList: {
    marginVertical: 32,
    paddingLeft: 30,
    paddingBottom: 5,
    height: 40,
    justifyContent: 'center'
  },
  plants: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;