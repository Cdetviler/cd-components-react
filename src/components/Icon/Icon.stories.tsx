import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
