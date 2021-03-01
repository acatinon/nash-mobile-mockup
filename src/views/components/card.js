import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { padding } from '../../styles/theme';
import createStyles from '../../styles/base';

export default function Card(props) {

  return (
    <View style={[styles.base, { backgroundColor: props.backgroundColor }]}>
      <LinearGradient
        colors={['#fff4', '#fff0']}
        start={{x:0.1, y:0}}>
        {props.renderBackground && 
        <View style={styles.fullSizeStacked}>
            {props.renderBackground()}
        </View>
        }
        <View style={styles.content}>
          {props.children}
        </View>
      </LinearGradient>
    </View>

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