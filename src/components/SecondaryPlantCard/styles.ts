import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 25,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.shape,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: colors.heading,
    fontSize: 18,
    fontFamily: fonts.heading,
    flex: 1,
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    color: colors.body_light,
    fontSize: 16,
    fontFamily: fonts.text,
  },
  time: {
    marginTop: 5,
    color: colors.body_dark,
    fontSize: 16,
    fontFamily: fonts.heading,
  },
  removePlant: {
    marginTop: 8,
    paddingLeft: 15,
    width: 100,
    height: 95,
    borderRadius: 20,
    backgroundColor: colors.red,
    position: 'relative',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;