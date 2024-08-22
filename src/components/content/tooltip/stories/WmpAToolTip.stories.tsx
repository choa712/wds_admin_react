import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpAToolTip from "../WmpAToolTip";

export default {
  title: "Content/WmpAToolTip/Component",
  component: WmpAToolTip,
  argTypes: {
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof WmpAToolTip>;

export const WmpAToolTip_: ComponentStory<typeof WmpAToolTip> = (args) => (
  <WmpAToolTip {...args}>{args.children}</WmpAToolTip>
);

WmpAToolTip_.args = {
  align: "left",
  content: <div>children</div>,
  title: "카탈로그 검색 안내사항",
  children: (
    <>
      <WmpAToolTip.List>상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요.</WmpAToolTip.List>
      <WmpAToolTip.List>모델명(모델번호)로 검색하는 경우 더욱 정확한 검색결과를 얻을 수 있습니다.</WmpAToolTip.List>
    </>
  ),
};
