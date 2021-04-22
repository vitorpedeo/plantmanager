import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spotlight: {
    paddingHorizontal: 20,
    height: 110,
    borderRadius: 20,
    backgroundColor: colors.blue_light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    paddingHorizontal: 20,
    color: colors.blue,
    fontFamily: fonts.text,
    flex: 1,
  },
  myPlants: {
    width: '100%',
    flex: 1,
  },
  myPlantsTitle: {
    marginVertical: 20,
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
  },
});

export default styles;
