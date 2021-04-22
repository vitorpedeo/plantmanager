import { StyleSheet, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    flex: 1,
    justifyContent: 'space-between',
  },
  plantInfo: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: colors.shape,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantName: {
    marginTop: 15,
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
  },
  plantAbout: {
    marginTop: 10,
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
  },
  controller: {
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 20,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  tipContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.blue_light,
    position: 'relative',
    bottom: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    marginLeft: 20,
    color: colors.blue,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'justify',
    flex: 1,
  },
  alertLabel: {
    marginBottom: 5,
    color: colors.heading,
    fontFamily: fonts.complement,
    fontSize: 14,
    textAlign: 'center',
  },
  dateTimePickerButton: {
    marginVertical: 20,
    paddingVertical: 20,
    width: '100%',
    borderRadius: 16,
    backgroundColor: colors.green_light,
    alignItems: 'center',
  },
  dateTimePickerText: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 24,
  },
});

export default styles;
