import React, { useReducer } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Wallet from "./src/views/wallet";
import DrawerContent from "./src/views/drawer_content";
import { ThemeReducer, ThemeReducerContext, initialState } from './src/helpers/theme_reducer';

const Drawer = createDrawerNavigator();

export default function App() {
  const [ThemeState, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <SafeAreaProvider>
      <ThemeReducerContext.Provider value={{ ThemeState, dispatch }}>
        <ThemeProvider theme={ThemeState.theme} useDark={ThemeState.mode === 'dark' ? true : false}>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Wallet" drawerContent={DrawerContent}>
              <Drawer.Screen name="Wallet" component={Wallet} />
            </Drawer.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </ThemeReducerContext.Provider>
    </SafeAreaProvider>
  );
}