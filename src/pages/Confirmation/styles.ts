import { Platform, StatusBar, StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    padding: 30,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    marginTop: 15,
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
    textAlign: 'center',
    lineHeight: 38,
  },
  subtitle: {
    paddingVertical: 10,
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 50,
    width: '100%',
  },
});

export default styles;