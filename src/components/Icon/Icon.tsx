import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconProps } from './Icon.types';
import { semanticSizes } from '../../types';
import getVariant from './iconVariants';
import { themeDefault } from '../Theme';

const Icon = ({ variant, size = 'lg', color = 'primary', theme = themeDefault }: IconProps) => {
  const sizeConversionMap = theme.fonts.sizes;
  const themeColor = theme.colors.semantic.text[color];

  const getSize = (currentSize: semanticSizes) => {
    if (currentSize in sizeConversionMap) {
      return sizeConversionMap[currentSize];
    }
    return sizeConversionMap.lg;
  };

  const fontAwesomeIconVariant = getVariant(variant) as IconDefinition;
  const fontAwesomeSize = getSize(size);
  const style = {
    fontSize: fontAwesomeSize,
    color: themeColor,
  };
  return <FontAwesomeIcon style={style} icon={fontAwesomeIconVariant} />;
};

export default Icon;
