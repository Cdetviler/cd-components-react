import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = { children: 'My Button', size: 'md', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'My Button', size: 'md', variant: 'secondary' };

export const tertiary = Template.bind({});
tertiary.args = { children: 'My Button', size: 'md', variant: 'tertiary' };
