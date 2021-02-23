import { StyleSheet } from 'react-native';
import { fonts, colors } from './theme';

const baseStyles = {
  title: {
    fontSize: fonts.lg,
    fontFamily: fonts.bold,
    color: colors.text
  },
  sub: {
    fontSize: fonts.md,
    fontFamily: fonts.bold,
    color: colors.muted
  },
  inverted: {
    color: colors.inverted
  },
  muted: {
    color: colors.muted
  },
  mutedInverted: {
    color: colors.mutedInverted
  }
}

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides })
}