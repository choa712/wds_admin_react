import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAForm from "../WmpAForm";
import { WmpAInputText, WmpAButton } from "../../../basic";

export default {
  title: "Layout/WmpAForm/Component",
  component: WmpAForm,
  argTypes: {
    topBorder: {
      options: ["regular", "bold", "none"],
      control: {
        type: "select",
      },
    },
    bottomBorder: {
      options: ["regular", "bold", "none"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof WmpAForm>;

export const WmpAForm_: ComponentStory<typeof WmpAForm> = (args) => {
  return (
    <WmpAForm topBorder={args.topBorder} bottomBorder={args.bottomBorder} onSubmit={args.onSubmit} button={args.button}>
      {args.children}
    </WmpAForm>
  );
};

WmpAForm_.args = {
  onSubmit: () => console.log("onSubmit"),
  children: (
    <>
      <WmpAForm.Box title={<WmpAForm.Label>페이지</WmpAForm.Label>}>
        <WmpAInputText width="md" />
      </WmpAForm.Box>
    </>
  ),
  topBorder: "regular",
  bottomBorder: "regular",
  button: (
    <>
      <WmpAButton size="lg">초기화</WmpAButton>
      <WmpAButton size="lg" fill="solid" color="red">
        검색
      </WmpAButton>
    </>
  ),
};
