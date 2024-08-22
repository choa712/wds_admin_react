import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WmpATextArea from "../WmpATextArea";
import { color_basic_solid } from "../../../../assets/style/colors";

export default {
  title: "Basic/WmpATextArea/Component",
  component: WmpATextArea,
  argTypes: {
    textType: {
      options: ["right", "down", undefined],
      control: { type: "select" },
      description: "박스타입",
    },
    disabled: {
      table: {
        defaultValue: {
          summary: false,
        },
      },
      options: [true, false],
      control: { type: "boolean" },
      description: "disabled 여부",
    },
    helperTextColor: {
      options: Object.keys(color_basic_solid),
      control: { type: "select" },
    },
    readonly: {
      options: [true, false],
      control: { type: "boolean" },
      description: "readonly 여부",
    },
    placeholder: {
      table: {
        defaultValue: {
          summary: "placeholder",
        },
      },
      control: { type: "text" },
      description: "placeholder 내용",
    },
    value: {
      table: {
        defaultValue: {
          summary: "input 텍스트",
        },
      },
      control: { type: "text" },
      description: "input 텍스트",
    },
  },
} as ComponentMeta<typeof WmpATextArea>;

export const WmpATextArea_: ComponentStory<typeof WmpATextArea> = (args) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(args.value as string);
  }, [args.value]);

  return (
    <WmpATextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      helperTextColor={args.helperTextColor}
    />
  );
};

WmpATextArea_.args = {
  disabled: false,
  readonly: false,
  placeholder: "텍스트를 입력해주세요.",
  textType: "right",
  value: "텍스트입니다.",
  helperTextColor: "gray_50",
  currentTextLength: "10",
  maxTextLength: "/100",
  onChange: () => console.log("onChange"),
};
