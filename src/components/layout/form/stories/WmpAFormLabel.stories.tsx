import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAForm from "../WmpAForm";
import WmpAToolTip from "../../../content/tooltip/WmpAToolTip";
import { WmpAInputText } from "../../../basic";

export default {
  title: "Layout/WmpAForm/Component",
  component: WmpAForm.Label,
  argTypes: {},
} as ComponentMeta<typeof WmpAForm>;

export const WmpAFormLabel_: ComponentStory<typeof WmpAForm.Label> = (args) => {
  return (
    <WmpAForm>
      <WmpAForm.Box
        title={
          <WmpAForm.Label
            isRequired={args.isRequired}
            inputId={args.inputId}
            tooltip={args.tooltip}
            labelWidth={args.labelWidth}
          >
            {args.children}
          </WmpAForm.Label>
        }
      >
        <WmpAInputText width="md" />
      </WmpAForm.Box>
    </WmpAForm>
  );
};

WmpAFormLabel_.args = {
  tooltip: (
    <WmpAToolTip title={"타이틀"}>
      <WmpAToolTip.List>1</WmpAToolTip.List>
      <WmpAToolTip.List>1</WmpAToolTip.List>
      <WmpAToolTip.List>1</WmpAToolTip.List>
      <WmpAToolTip.List>1</WmpAToolTip.List>
    </WmpAToolTip>
  ),
  children: "타이틀",
  inputId: "input_1",
  isRequired: true,
};
