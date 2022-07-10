/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const generateFontStyle = (weight: number | Array<number>, style: string) => {
  const parsedWeight = typeof weight === 'number' ? weight : weight.join(' ');
  return `
    font-weight: ${parsedWeight};
    font-style: ${style};
  `;
};

const generateGlobalFonts = () => {
  const ROBOTO_THIN = require('../../../assets/fonts/Roboto-Thin.ttf');
  const ROBOTO_THIN_ITALIC = require('../../../assets/fonts/Roboto-ThinItalic.ttf');
  const ROBOTO_LIGHT = require('../../../assets/fonts/Roboto-Light.ttf');
  const ROBOTO_LIGHT_ITALIC = require('../../../assets/fonts/Roboto-LightItalic.ttf');
  const ROBOTO = require('../../../assets/fonts/Roboto-Regular.ttf');
  const ROBOTO_ITALIC = require('../../../assets/fonts/Roboto-Italic.ttf');
  const ROBOTO_MEDIUM = require('../../../assets/fonts/Roboto-Medium.ttf');
  const ROBOTO_MEDIUM_ITALIC = require('../../../assets/fonts/Roboto-MediumItalic.ttf');
  const ROBOTO_BOLD = require('../../../assets/fonts/Roboto-Bold.ttf');
  const ROBOTO_BOLD_ITALIC = require('../../../assets/fonts/Roboto-BoldItalic.ttf');
  const ROBOTO_BLACK = require('../../../assets/fonts/Roboto-Black.ttf');
  const ROBOTO_BLACK_ITALIC = require('../../../assets/fonts/Roboto-BlackItalic.ttf');

  return `
    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_THIN}) format('truetype');
      ${generateFontStyle([100, 200], 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_THIN_ITALIC}) format('truetype');
      ${generateFontStyle([100, 200], 'italic')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_LIGHT}) format('truetype');
      ${generateFontStyle(300, 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_LIGHT_ITALIC}) format('truetype');
      ${generateFontStyle(300, 'italic')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO}) format('truetype');
      ${generateFontStyle(400, 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_ITALIC}) format('truetype');
      ${generateFontStyle(400, 'italic')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_MEDIUM}) format('truetype');
      ${generateFontStyle([500, 600], 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_MEDIUM_ITALIC}) format('truetype');
      ${generateFontStyle([500, 600], 'italic')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_BOLD}) format('truetype');
      ${generateFontStyle([700, 800], 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_BOLD_ITALIC}) format('truetype');
      ${generateFontStyle([700, 800], 'italic')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_BLACK}) format('truetype');
      ${generateFontStyle(900, 'normal')}
    }

    @font-face {
      font-family: Roboto;
      src: url(${ROBOTO_BLACK_ITALIC}) format('truetype');
      ${generateFontStyle(900, 'italic')}
    }
  `;
};

export default generateGlobalFonts;
