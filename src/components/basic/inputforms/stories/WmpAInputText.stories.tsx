import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WmpAInputText from "../WmpAInputText";
import { color_basic_solid } from "../../../../assets/style/colors";

export default {
  title: "Basic/WmpAInputText/Component",
  component: WmpAInputText,
  argTypes: {
    textType: {
      table: {},
      options: [null, "downText"],
      control: { type: "select" },
      description: "박스타입",
    },
    unit: {
      defaultValue: {
        summary: "",
      },
      control: { type: "text" },
      description: "원",
    },
    width: {
      options: [null, "compact", "sx", "sm", "md", "lg", "xl", "xxl", "fill"],
      control: { type: "select" },
      description: "넓이값",
    },
    height: {
      options: [null, "text_sm", "text_md", "text_lg"],
      control: { type: "select" },
      description: "높이값",
    },
    align: {
      table: {
        defaultValue: {
          summary: "left",
        },
      },
      options: ["left", "right"],
      control: { type: "select" },
      description: "정렬",
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
    readonly: {
      table: {
        defaultValue: {
          summary: false,
        },
      },
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
    helpText: {
      table: {
        defaultValue: {
          summary: "안내 텍스트",
        },
      },
      control: { type: "text" },
      description: "안내 텍스트",
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
    helpTextColor: {
      control: {
        type: "select",
      },
      options: Object.keys(color_basic_solid),
    },
    type: {
      control: {
        type: "select",
      },
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
    },
  },
} as ComponentMeta<typeof WmpAInputText>;

export const WmpAInputText_: ComponentStory<typeof WmpAInputText> = (args) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(args.value as string);
  }, [args.value]);

  return <WmpAInputText {...args} value={input} onChange={(e) => setInput(e.target.value)} />;
};

WmpAInputText_.args = {
  helpText: "에러가 발생했습니다.",
  disabled: false,
  readonly: false,
  placeholder: "찾을 텍스트를 입력해주세요.",
  type: "text",
  textType: "downText",
  width: "md",
  height: "text_sm",
  helpTextColor: "blue_500",
  align: "left",
  value: "텍스트입니다.",
  unit: "원",
  isInputError: false,
  onChange: () => console.log("onChange"),
};
