import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAToolTip from "../WmpAToolTip";

export default {
  title: "Content/WmpAToolTip/Component",
  component: WmpAToolTip.List,
  argTypes: {},
} as ComponentMeta<typeof WmpAToolTip.List>;

export const WmpAToolTipList_: ComponentStory<typeof WmpAToolTip.List> = (args) => (
  <WmpAToolTip>
    <WmpAToolTip.List>{args.children}</WmpAToolTip.List>
  </WmpAToolTip>
);

WmpAToolTipList_.args = {
  children: "상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요.",
};
