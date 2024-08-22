import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAForm from "../WmpAForm";
import { WmpAInputText } from "../../../basic";

export default {
  title: "Layout/WmpAForm/Component",
  component: WmpAForm.Box,
  argTypes: {
    topPadding: {
      table: {
        defaultValue: {
          summary: "space_6",
        },
      },
      options: [
        "space_none",
        "space_1",
        "space_2",
        "space_4",
        "space_6",
        "space_8",
        "space_10",
        "space_12",
        "space_16",
        "space_18",
        "space_20",
        "space_24",
        "space_28",
        "space_32",
        "space_40",
        "space_48",
      ],
      control: { type: "select" },
      description: "상단여백",
    },
    bottomPadding: {
      table: {
        defaultValue: {
          summary: "space_6",
        },
      },
      options: [
        "space_none",
        "space_1",
        "space_2",
        "space_4",
        "space_6",
        "space_8",
        "space_10",
        "space_12",
        "space_16",
        "space_18",
        "space_20",
        "space_24",
        "space_28",
        "space_32",
        "space_40",
        "space_48",
      ],
      control: { type: "select" },
      description: "하단여백",
    },
    vAlign: {
      table: {
        defaultValue: {
          summary: "center",
        },
      },
      options: ["top", "center"],
      control: { type: "select" },
      description: "상단여백",
    },
  },
} as ComponentMeta<typeof WmpAForm.Box>;

export const WmpAFormBox_: ComponentStory<typeof WmpAForm.Box> = (args) => {
  return (
    <WmpAForm>
      <WmpAForm.Box
        title={args.title}
        topPadding={args.topPadding}
        bottomPadding={args.bottomPadding}
        vAlign={args.vAlign}
      >
        {args.children}
      </WmpAForm.Box>
    </WmpAForm>
  );
};

WmpAFormBox_.args = {
  title: <WmpAForm.Label>페이지</WmpAForm.Label>,
  children: (
    <>
      TEST
      <br />
      <br />
      <WmpAInputText width="md" />
    </>
  ),
  vAlign: "top",
};
