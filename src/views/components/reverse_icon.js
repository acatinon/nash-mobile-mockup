import React from 'react';
import { Icon } from 'react-native-elements';

export default function ReverseIcon(props) {
  return (
    <Icon reverse type="font-awesome-5" name={props.name}>
        {props.children}
    </Icon>
  );
};
