import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

const Pill = (props) => {
    const { theme, updateTheme, replaceTheme } = props;

  return (
    <View style={{ flexDirection: 'row', backgroundColor: theme.colors.white, opacity: 0.6, borderRadius: 8, paddingHorizontal: 4, paddingTop: 2 }}>
      {props.children}
    </View>
  );
};

export default withTheme(Pill);