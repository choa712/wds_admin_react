import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Example from "../../../../stories/components/Example";
import WmpAToolTip from "../WmpAToolTip";

export default {
  title: "Content/WmpAToolTip/Examples",
  component: Example,
  parameters: {
    previewTabs: {
      docs: { hidden: true },
    },
    options: {
      showPanel: false,
    },
  },
} as ComponentMeta<typeof Example>;

export const Example1: ComponentStory<typeof Example> = () => {
  return (
    <Example
      code={
        <WmpAToolTip align="left" title="카탈로그 검색 안내사항" content={<div>content</div>}>
          <>
            <WmpAToolTip.List>상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요.</WmpAToolTip.List>
            <WmpAToolTip.List>
              모델명(모델번호)로 검색하는 경우 더욱 정확한 검색결과를 얻을 수 있습니다.
            </WmpAToolTip.List>
          </>
        </WmpAToolTip>
      }
      codeString={`
const [isOpen, setIsOpen] = useState(false);

<WmpAToolTip align="left" title="카탈로그 검색 안내사항" content={<div>content</div>}>
    <WmpAToolTip.List>
        상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요.
    </WmpAToolTip.List>
    <WmpAToolTip.List>
        모델명(모델번호)로 검색하는 경우 더욱 정확한 검색결과를 얻을 수
        있습니다.
    </WmpAToolTip.List>
</WmpAToolTip>
`}
    />
  );
};
