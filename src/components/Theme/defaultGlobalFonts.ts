import ROBOTO_THIN from '../../../assets/fonts/Roboto-Thin.ttf';
import ROBOTO_THIN_ITALIC from '../../../assets/fonts/Roboto-ThinItalic.ttf';
import ROBOTO_LIGHT from '../../../assets/fonts/Roboto-Light.ttf';
import ROBOTO_LIGHT_ITALIC from '../../../assets/fonts/Roboto-LightItalic.ttf';
import ROBOTO from '../../../assets/fonts/Roboto-Regular.ttf';
import ROBOTO_ITALIC from '../../../assets/fonts/Roboto-Italic.ttf';
import ROBOTO_MEDIUM from '../../../assets/fonts/Roboto-Medium.ttf';
import ROBOTO_MEDIUM_ITALIC from '../../../assets/fonts/Roboto-MediumItalic.ttf';
import ROBOTO_BOLD from '../../../assets/fonts/Roboto-Bold.ttf';
import ROBOTO_BOLD_ITALIC from '../../../assets/fonts/Roboto-BoldItalic.ttf';
import ROBOTO_BLACK from '../../../assets/fonts/Roboto-Black.ttf';
import ROBOTO_BLACK_ITALIC from '../../../assets/fonts/Roboto-BlackItalic.ttf';

const generateFontStyle = (weight: number | Array<number>, style: string) => {
  const parsedWeight = typeof weight === 'number' ? weight : weight.join(' ');
  return `
    font-weight: ${parsedWeight};
    font-style: ${style};
  `;
};

const defaultGlobalFonts = `
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

export default defaultGlobalFonts;
