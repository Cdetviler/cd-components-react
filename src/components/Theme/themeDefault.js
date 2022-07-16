export const colorNames = {
  // Colornames generated with https://colornamer.robertcooper.me/
  blues: {
    flyingFish: '#114ad9',
    lago: '#1db8c9',
    kantor: '#061847',
    catalina: '#0a2a7b',
    punchOutGlove: '#8eabf6',
    coldBlooded: '#90e8ee',
  },
  grays: {
    ash: '#6c757d',
    white: '#ffffff',
    black: '#000000',
    infinity: '#242631',
    darkRiver: '#3e4347',
    belgianBlock: '#bec3c6',
  },
  greens: {
    vitalize: '#28a745',
    ghostlandsCoal: '#0a3d43',
    algalFuel: '#1dc965',
    pineGreen: '#0a4321',
    naturesStrength: '#107038',
    seaMount: '#106670',
    snowPea: '#9ce7ae',
  },
  reds: {
    bloodRed: '#c91d1d',
    festiveBordeaux: '#701010',
    bulgarianRose: '#430a0a',
    coralCommander: '#ef8f8f',
  },
  yellows: {
    marigold: '#ffc107',
    nuggetGold: '#c99b1d',
    hiddenPassage: '#43340a',
    hotMustard: '#705610',
    gentleGlow: '#eed590',
  },
};

export const colors = {
  ...colorNames,
  semantic: {
    background: {
      primary: colorNames.blues.flyingFish,
      secondary: colorNames.grays.ash,
      success: colorNames.greens.algalFuel,
      danger: colorNames.reds.bloodRed,
      warning: colorNames.yellows.nuggetGold,
      info: colorNames.blues.lago,
    },
    // 20% less lightness (HSL) than background colors
    text: {
      // todo: create text colors
      primary: colorNames.blues.catalina,
      secondary: colorNames.grays.darkRiver,
      success: colorNames.greens.naturesStrength,
      danger: colorNames.reds.festiveBordeaux,
      warning: colorNames.yellows.hotMustard,
      info: colorNames.greens.seaMount,
    },
    // 40% less lightness (HSL) than background colors
    border: {
      primary: colorNames.blues.kantor,
      secondary: colorNames.grays.infinity,
      success: colorNames.greens.pineGreen,
      danger: colorNames.reds.bulgarianRose,
      warning: colorNames.yellows.hiddenPassage,
      info: colorNames.blues.ghostlandsCoal,
    },
    // 20% less lightness (HSL) than normal background colors
    hover: {
      primary: colorNames.blues.catalina,
      secondary: colorNames.grays.darkRiver,
      success: colorNames.greens.naturesStrength,
      danger: colorNames.reds.festiveBordeaux,
      warning: colorNames.yellows.hotMustard,
      info: colorNames.greens.seaMount,
    },
    // 40% less lightness (HSL) than normal background colors
    active: {
      primary: colorNames.blues.kantor,
      secondary: colorNames.grays.infinity,
      success: colorNames.greens.pineGreen,
      danger: colorNames.reds.bulgarianRose,
      warning: colorNames.yellows.hiddenPassage,
      info: colorNames.greens.ghostlandsCoal,
    },
    // 30% more lightness (HSL) than normal background colors
    disabled: {
      primary: colorNames.blues.punchOutGlove,
      secondary: colorNames.grays.belgianBlock,
      success: colorNames.greens.snowPea,
      danger: colorNames.reds.coralCommander,
      warning: colorNames.yellows.gentleGlow,
      info: colorNames.blues.coldBlooded,
    }
  },
};

export const borders = {
  sizes: {
    xs: '.25px',
    sm: '.5px',
    md: '1px',
    lg: '2px',
    xl: '3px'
  }
}

export const fonts = {
  families: {
    primary: 'Roboto',
    secondary: '',
  },
  sizes: {
    xs: '.64rem',
    sm: '.8rem',
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
