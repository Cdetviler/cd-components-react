import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider, themeDefault } from '.';

export default {
  title: 'Components/Theme/Fonts',
  component: ThemeProvider,
} as Meta;

interface ThemeStoryInterface {
  fontWeight: 100 | 300 | 400 | 500 | 700 | 900;
  fontStyle: 'normal' | 'italic';
}
// test
const Template: Story<ThemeStoryInterface> = ({ fontWeight, fontStyle }) => {
  const style = {
    fontFamily: 'Roboto',
    fontWeight,
    fontStyle,
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <h1 style={style}> The quick brown fox jumps over the lazy dog </h1>
    </ThemeProvider>
  );
};

export const Thin = Template.bind({});
Thin.args = { fontWeight: 100, fontStyle: 'normal' };

export const ThinItalic = Template.bind({});
ThinItalic.args = { fontWeight: 100, fontStyle: 'italic' };

export const Light = Template.bind({});
Light.args = { fontWeight: 300, fontStyle: 'normal' };

export const LightItalic = Template.bind({});
LightItalic.args = { fontWeight: 300, fontStyle: 'italic' };

export const Regular = Template.bind({});
Regular.args = { fontWeight: 400, fontStyle: 'normal' };

export const RegularItalic = Template.bind({});
RegularItalic.args = { fontWeight: 400, fontStyle: 'italic' };

export const Medium = Template.bind({});
Medium.args = { fontWeight: 500, fontStyle: 'normal' };

export const MediumItalic = Template.bind({});
MediumItalic.args = { fontWeight: 500, fontStyle: 'italic' };

export const Bold = Template.bind({});
Bold.args = { fontWeight: 700, fontStyle: 'normal' };

export const BoldItalic = Template.bind({});
BoldItalic.args = { fontWeight: 700, fontStyle: 'italic' };

export const Black = Template.bind({});
Black.args = { fontWeight: 900, fontStyle: 'normal' };

export const BlackItalic = Template.bind({});
BlackItalic.args = { fontWeight: 900, fontStyle: 'italic' };
