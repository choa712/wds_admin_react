import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAButton from "../WmpAButton";

export default {
  title: "Basic/WmpAButton/Component",
  component: WmpAButton,
  argTypes: {
    size: {
      table: {
        category: "size",
        defaultValue: {
          summary: "lg",
        },
      },
      options: ["xl", "lg", "md", "sm"],
      control: { type: "select" },
      description: "버튼 사이즈",
    },
    className: {
      table: {},
    },
    fill: {
      table: {
        category: "color",
        defaultValue: {
          summary: "outline",
        },
      },
      description: "버튼 색깔을 채우거나 혹은 테두리만 반영",
      options: ["solid", "outline"],
      control: { type: "select" },
    },
    type: {
      table: {
        defaultValue: {
          summary: "button",
        },
      },
      options: ["button", "submit", "reset"],
      description: "버튼의 용도",
      control: {
        type: "select",
      },
    },
    color: {
      table: {
        category: "color",
        defaultValue: {
          summary: "soft",
        },
      },
      options: ["soft", "red", "softred", "blue", "softblue"],
      description: "버튼 색깔",
      control: {
        type: "select",
      },
    },
    width: {
      table: {
        category: "size",
        defaultValue: {
          summary: "100%",
        },
      },
      description: "버튼 텍스트",
    },
    disabled: {
      table: {
        defaultValue: {
          summary: false,
        },
      },
      description: "버튼의 disabled 여부",
      options: [true, false],
      control: { type: "radio" },
    },
    onClick: {
      table: {
        category: "events",
      },
      control: { type: "object" },
      description: "버튼 클릭 이벤트 핸들러",
    },
    children: {
      description: "버튼 텍스트",
    },
    iconLeft: {
      table: {
        category: "icon",
        defaultValue: {
          summary: "",
        },
      },
      options: ["icon_check", "graphic_microsoft_excel_logo", "none"],
      control: { type: "select" },
      description: "버튼 텍스트 왼쪽 아이콘",
    },
    graphicIcon: {
      table: {
        category: "icon",
        defaultValue: {
          summary: true,
        },
      },
      description: "버튼 내 아이콘 색상 변경 여부",
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof WmpAButton>;

export const WmpAButton_: ComponentStory<typeof WmpAButton> = (args) => (
  <WmpAButton {...args}>{args.children}</WmpAButton>
);

WmpAButton_.args = {
  size: "xl", //xl, lg, md, sm
  fill: "outline", //solid, outline
  type: "button",
  color: "soft", //soft, red, blue
  iconLeft: "",
  graphicIcon: false,
  disabled: false,
  children: "버튼입니다.",
  onClick: () => console.log("onClick"),
};
