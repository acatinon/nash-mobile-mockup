import React from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

export const initialState = { theme: lightTheme, mode: 'light' };
export function ThemeReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case 'set-theme':
      return { ...state, theme: payload === 'light' ? lightTheme : darkTheme, mode: payload === 'light' ? 'light' : 'dark' };
    default:
      return state;
  }
}

export const ThemeReducerContext = React.createContext();