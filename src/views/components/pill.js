import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

const Pill = (props) => {
    const { theme, updateTheme, replaceTheme } = props;

  return (
    <View style={{ flexDirection: 'row', backgroundColor: props.backgroundColor || theme.colors.white, borderRadius: 8, paddingHorizontal: 4 }}>
      {props.children}
    </View>
  );
};

export default withTheme(Pill);