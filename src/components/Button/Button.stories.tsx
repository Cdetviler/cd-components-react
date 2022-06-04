import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "./Button";
import { themeDefault } from "../Theme";
import { ButtonProps } from "./Button.types";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "My Button", size: "md", variant: "primary", theme: themeDefault };

export const Secondary = Template.bind({});
Secondary.args = { children: "My Button", size: "md", variant: "secondary", theme: themeDefault };

export const Success = Template.bind({});
Secondary.args = { children: "My Button", size: "md", variant: "success", theme: themeDefault };