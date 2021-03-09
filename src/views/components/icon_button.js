import React from 'react';
import { View } from 'react-native';
import { Button, Icon, withTheme } from 'react-native-elements';

const IconButton = (props) => {
  const { theme, updateTheme, replaceTheme } = props;

  return (
    <View>
      <Icon
        reverse
        type="font-awesome-5"
        name={props.name}
        color={props.iconBackgroundColor || theme.colors.primary}
        reverseColor={props.iconColor || theme.colors.white} />
      <Button
        title={props.title}
        type="clear"
        titleStyle={{ fontSize: 14, fontWeight: "bold", color: props.textColor || theme.colors.black }} />
    </View>
  );
};

export default withTheme(IconButton);