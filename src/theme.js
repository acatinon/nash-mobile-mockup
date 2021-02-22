import { StyleSheet } from 'react-native';

const fontFamilies = StyleSheet.create({
    regular: {
      fontFamily: "Roboto_400Regular"
    },
    bold: {
      fontFamily: "Roboto_700Bold"
    },
  });
  
  const fontSizes = StyleSheet.create({
    jumbo: {
        fontSize: 24,
    },
    h1: {
      fontSize: 18,
    },
    text: {
      fontSize: 14,
    },
    small: {
      fontSize: 12,
    },
  });

  const theme = {
    jumbo: [fontSizes.jumbo, fontFamilies.bold],
  };
  
  export default theme;