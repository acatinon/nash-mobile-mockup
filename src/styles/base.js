import { StyleSheet } from 'react-native';
import { fonts, colors } from './theme';

const baseStyles = {
  title: {
    fontSize: fonts.lg,
    fontFamily: fonts.bold,
  },
  sub: {
    fontSize: fonts.md,
    fontFamily: fonts.bold,
  },
  stacked: {
    position: 'absolute',
    width: '100%',
  },
  fullSizeStacked: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides })
}