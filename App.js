import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Wallet from "./src/views/wallet";
import { padding } from './src/styles/theme';

const theme = {
  colors: {
    primary: '#0052f3',
  },
  Header: {
    centerContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backgroundColor: '#fff0',
    containerStyle: {
      borderBottom: 0
    }
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
};

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} useDark={false}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Wallet" drawerContent={DrawerContent}>
            <Drawer.Screen name="Wallet" component={Wallet} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}