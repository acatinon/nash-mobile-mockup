import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import ReverseIcon from './reverse_icon'

export default function IconButton(props) {
  return (
      <View>
          <ReverseIcon name={props.name} />
          <Button title={props.title} type="clear" titleStyle={{fontSize: 14, fontWeight: "bold", color: '#fff'}} />
      </View>
  );
};
