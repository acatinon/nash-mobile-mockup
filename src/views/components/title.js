import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default function Title(props) {
  return (
    <Text h4 style={{ marginTop: 15, marginHorizontal:15 }}>
        {props.children}
    </Text>

  );
};
