import React from 'react';
import { View } from 'react-native';
import { Card as ElementsCard, Text, withTheme } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { padding } from '../../styles/theme';
import createStyles from '../../styles/base';

const Card = (props) => {
  const { theme, updateTheme, replaceTheme } = props;

  return (
    <ElementsCard containerStyle={{ backgroundColor: props.backgroundColor }}>
      <LinearGradient
        colors={[theme.colors.cardGradientA, theme.colors.cardGradientB]}
        start={{x:1, y:0}}>
        {props.renderBackground && 
        <View style={styles.fullSizeStacked}>
            {props.renderBackground()}
        </View>
        }
        <View style={styles.content}>
          {props.children}
        </View>
      </LinearGradient>
    </ElementsCard>
  );
};

const styles = createStyles({
  base: {
    borderRadius: padding.sm,
    marginVertical: padding.sm,
  },
  content: {
    marginVertical: padding.sm,
  }
});

export default withTheme(Card);