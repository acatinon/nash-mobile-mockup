import React, { useContext } from 'react';
import { View, Switch } from 'react-native';
import { ThemeContext, Text, Divider } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { ThemeReducerContext } from '../helpers/theme_reducer';

function ContentComponent(props) {
  const { ThemeState, dispatch } = useContext(ThemeReducerContext);
  const { theme } = useContext(ThemeContext);
  
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 4,
        }}
      >
        <Text
          style={{
            marginTop: 3,
            flexGrow: 1,
          }}
        >
          Dark Mode
        </Text>

        <Switch
          style={{
          }}
          value={ThemeState.mode === 'dark'}
          onValueChange={(val) => {
            if (val === true) {
              dispatch({ type: 'set-theme', payload: 'dark' });
            } else {
              dispatch({ type: 'set-theme', payload: 'light' });
            }
          }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ContentComponent {...props} />
    </DrawerContentScrollView>
  );
}


export default DrawerContent;