export const colorNames = {
  // Colornames generated with https://colornamer.robertcooper.me/
  // todo: remove bootstrap colors and choose new colors
  blues: {
    azure: '#007bff',
    ahriman: '#17a2b8',
  },
  grays: {
    ash: '#6c757d',
    white: '#ffffff',
    black: '#000000',
  },
  greens: {
    vitalize: '#28a745',
  },
  reds: {
    cruelRuby: '#dc3545',
  },
  yellows: {
    marigold: '#ffc107',
  },
};

export const colors = {
  ...colorNames,
  semantic: {
    primary: colorNames.blues.azure,
    secondary: colorNames.grays.ash,
    success: colorNames.greens.vitalize,
    danger: colorNames.reds.cruelRuby,
    warning: colorNames.yellows.marigold,
    info: colorNames.blues.ahriman,
    text: {
      // todo: create text colors
      primary: colorNames.grays.black,
      secondary: colorNames.grays.black,
      success: colorNames.grays.black,
      danger: colorNames.grays.black,
      warning: colorNames.grays.black,
      info: colorNames.grays.black,
    },
  },
};

export const fonts = {
  families: {
    fonts: ['Roboto', 'sans-serif'],
  },
  sizes: {
    xs: '.64em',
    sm: '.8em',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.563rem',
    xxl: '1.953rem',
    xxxl: '2.441rem',
  },
  weights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    boldest: 900,
  }
};

export const zIndex = {
  // This shouldn't really have a need, but it's here just in case
  basement: '-100',
  default: 'auto',
  dropdowns: '200',
  navigation: '900',
  modals: '1000',
};

export const spacing = {
  padding: {
    xs: '.25em',
    sm: '.5em',
    md: '1em',
    lg: '1.5em',
    xl: '2em',
  },
  margin: {
    xs: '.25em',
    sm: '.5em',
    md: '1em',
    lg: '1.5em',
    xl: '2em',
  },
  gutter: {
    xs: '.25em',
    sm: '.5em',
    md: '1em',
    lg: '1.5em',
    xl: '2em',
  },
};

// todo add types to arguments to enforce theme object structure
export const generateTheme = (colorTheme, fontTheme, zIndexTheme, spacingTheme) => {
  return {
    colors: colorTheme,
    fonts: fontTheme,
    zIndex: zIndexTheme,
    spacing: spacingTheme
  }
}

export const themeDefault = {
  colors,
  fonts,
  zIndex,
  spacing,
};

export const getCurrentTheme = (currentComponentProps) =>
  currentComponentProps.theme || themeDefault;
