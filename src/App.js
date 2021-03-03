import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Wallet } from "./views/wallet";
import { fonts } from './styles/theme';

const theme = {
  Header: {
    centerContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backgroundColor: '#fff0',
  },
  Card: {
    containerStyle: {
      padding: 0,
      border: 0,
      borderRadius: 8
    },
  },
  Text: {
    h4Style: {
      fontSize: 18
    }
  },
  CardFeaturedTitle: {
    style: {
      marginBottom: 0,
    }
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Wallet />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}