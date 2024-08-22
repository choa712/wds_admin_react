import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAToolTip from "../../tooltip/WmpAToolTip";
import WmpAText from "../WmpAText";

export default {
  title: "Content/WmpAText/Component",
  component: WmpAText,
  argTypes: {
    fontStyle: {
      table: {
        defaultValue: {
          summary: "caption_sm",
        },
      },
      options: [
        "display_lg",
        "display_md",
        "display_sm",
        "header_lg",
        "header_md",
        "header_sm",
        "body_lg",
        "body_md",
        "body_sm",
        "caption_lg",
        "caption_sm",
      ],
      control: { type: "select" },
      description: "폰트 크기",
    },
    weight: {
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      options: ["regular", "bold"],
      control: { type: "select" },
      description: "텍스트 굵기",
    },
    color: {
      table: {
        defaultValue: {
          summary: "black",
        },
      },
      options: [
        "white",
        "gray_50",
        "gray_100",
        "gray_200",
        "gray_300",
        "gray_400",
        "gray_500",
        "gray_700",
        "gray_800",
        "gray_900",
        "black",
        "blue_400",
        "bluegray_600",
        "bluegray_700",
        "bluegray_800",
        "red_500",
        "blue_500",
        "blue_700",
        "red_100",
        "yellow_500",
        "yellow_700",
      ],
      control: { type: "select" },
      description: "텍스트 색깔",
    },
    tag: {
      table: {
        defaultValue: {
          summary: "p",
        },
      },
      control: { type: "select" },
      options: ["p", "span"],
      description: "tag 종류",
    },
    children: {
      table: {
        category: "slots",
      },
      control: { type: "text" },
      description: "텍스트 내용",
    },
    decoration: {
      table: {
        defaultValue: {
          summary: "",
        },
      },
      options: ["", "underline", "breakline"],
      control: { type: "select" },
      description: "텍스트 데코레이션",
    },
    align: {
      table: {
        defaultValue: {
          summary: "",
        },
      },
      options: ["", "left", "center", "right"],
      control: { type: "select" },
      description: "텍스트 정렬",
    },
    className: {
      table: {
        defaultValue: {
          summary: "WmpAText",
        },
      },
      control: {
        type: "text",
      },
      description: "텍스트 HTML className",
    },
    required: {
      table: {
        defaultValue: {
          summary: true,
        },
      },
      description: "텍스트 우측 상단에 빨간색 필수 표시",
      options: [true, false],
      control: { type: "radio" },
    },
    bulletLeft: {
      table: {
        defaultValue: {
          summary: "",
        },
      },
      description: "텍스트 좌측 상단에 빨간색 필수 표시",
      options: ["", "left"],
      control: { type: "select" },
    },
    ellipsis: {
      table: {
        defaultValue: {
          summary: "",
        },
      },
      description: "텍스트 줄(line) 수",
      options: ["", "1", "2"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof WmpAText>;

const Template: ComponentStory<typeof WmpAText> = (args) => <WmpAText {...args}>{args.children}</WmpAText>;

export const WmpAText_ = Template.bind({});

WmpAText_.args = {
  weight: "regular",
  fontStyle: "body_sm",
  color: "black",
  tag: "span",
  children: "텍스트입니다.",
  tooltip: <WmpAToolTip title="툴팁 타이틀">컨텐츠</WmpAToolTip>,
};
