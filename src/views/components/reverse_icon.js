import React from 'react';
import { Icon } from 'react-native-elements';

export default function ReverseIcon(props) {
  return (
    <Icon raised type="font-awesome-5" name={props.name} containerStyle={{boxShadow: 'none'}}>
        {props.children}
    </Icon>
  );
};
