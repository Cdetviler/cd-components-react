import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { themeDefault, ThemeProvider } from '../Theme';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  console.log(args);
  return (
    <ThemeProvider theme={themeDefault}>
      <Button {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = { children: 'My Button', size: 'md', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'My Button', size: 'md', variant: 'secondary' };

export const Success = Template.bind({});
Success.args = { children: 'My Button', size: 'md', variant: 'success' };

export const Danger = Template.bind({});
Danger.args = { children: 'My Button', size: 'md', variant: 'danger' };

export const Warning = Template.bind({});
Warning.args = { children: 'My Button', size: 'md', variant: 'warning' };

export const Info = Template.bind({});
Info.args = { children: 'My Button', size: 'md', variant: 'info' };
