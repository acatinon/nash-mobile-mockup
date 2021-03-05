import React from 'react';
import { View } from 'react-native';

export default function MarginView(props) {
  return (
    <View style={[props.style, { marginTop: 15, marginHorizontal: 15 }]}>
      {props.children}
    </View>
  );
};
