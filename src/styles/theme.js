import deepmerge from 'deepmerge';

const lightColors = {
  colors: {
    white: '#ffffff',
    black: '#242424',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',

    cardGradientA: '#fff4',
    cardGradientB: '#fff0',
  }
};

const darkcolors = {
  colors: {
    white: '#111111',
    black: '#eeeeee',
    grey5: '#393e42',
    grey4: '#43484d',
    grey3: '#5e6977',
    grey2: '#86939e',
    grey1: '#bdc6cf',
    grey0: '#e1e8ee',

    cardGradientA: '#0000',
    cardGradientB: '#0004',
  }
};

const themeOverrides = {
  colors: {
    primary: '#0052f3',
  },
  Header: {
    centerContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backgroundColor: 'transparent',
    containerStyle: {
      borderBottomWidth: 0
    }
  },
  Card: {
    containerStyle: {
      padding: 0,
      border: 0,
      borderRadius: 8
    },
  },
  Text: {
    h4Style: {
      fontSize: 18
    }
  },
};

export const lightTheme = deepmerge(themeOverrides, lightColors);

export const darkTheme = deepmerge(themeOverrides, darkcolors);

export const colors  = {
  white: '#fff',
  black: '#444',
  
  btc: 'hsl(42, 100%, 47%)',
  eth: '#hsl(218, 33%, 59%)',
  neo: '#hsl(170, 100%, 34%)',
  nex: '#hsl(220, 100%, 59%)',
  aave: '#hsl(314, 41%, 51%)',
}

export const padding = {
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64
}

export const fonts = {
  sm: 12,
  md: 14,
  lg: 20,
  xl: 28,
}