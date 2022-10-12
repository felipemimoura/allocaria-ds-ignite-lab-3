import { Button, ButtonPros } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: { children: "Create account" },
  argTypes: {},
} as Meta<ButtonPros>;

export const Default: StoryObj<ButtonPros> = {};
