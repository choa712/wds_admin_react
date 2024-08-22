import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import Example from "../../../stories/components/Example";
import WmpAFold from "./WmpAFold";
import WmpAText from "../text/WmpAText";

export default {
  title: "Content/WmpAFold/Examples",
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

export const Basic: ComponentStory<typeof Example> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Example
      code={
        <WmpAFold
          hideText={
            <div>
              <div>카탈로그 선택 시 카테고리, 상품명, 제조사, 브랜드 항목이 자동으로 입력됩니다.</div>
              <div>카탈로그 매칭이 완료되면 위메프 사이트 내에서 검색 시 노출이 더욱 많이 됩니다.</div>
            </div>
          }
          title="카탈로그 정보"
          children={
            <>
              <WmpAText color="black" fontStyle="body_md" tag="p">
                카탈로그 컨텐츠 텍스트 영역
              </WmpAText>
            </>
          }
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      }
      codeString={`
const [isOpen, setIsOpen] = useState(false);

<WmpAFold 
  hideText={(
    <div>
      <div>카탈로그 입력안함</div>
      <div>카탈로그 입력안함</div>
    </div>
  )}
  title="카탈로그 정보"
  children={
    <>
      <WmpAText color="black"
        fontStyle="body_md"
        tag="p"
      >카탈로그 컨텐츠 텍스트 영역
      </WmpAText>
    </>
  },
  isOpen={isOpen}
  onClick={() => setIsOpen(!isOpen)}
/>
`}
    />
  );
};

export const AccodionSmall_: ComponentStory<typeof Example> = () => {
  const [isOpenSmall, setIsOpenSmall] = useState(false);

  return (
    <Example
      code={
        <WmpAFold
          size="sm"
          title="WmpAFold Small Title"
          children={
            <>
              <WmpAText color="black" fontStyle="body_md" tag="p">
                WmpAFold Contents <br />
                WmpAFold Contents <br />
                WmpAFold Contents <br />
              </WmpAText>
            </>
          }
          isOpen={isOpenSmall}
          onClick={() => setIsOpenSmall(!isOpenSmall)}
          onRemove={() => console.log("delete")}
        />
      }
      codeString={`
const [isOpenSmall, setIsOpenSmall] = useState(false);

<WmpAFold
size="sm"
title="WmpAFold Small Title"
children={
  <>
    <WmpAText color="black" fontStyle="body_md" tag="p">
      WmpAFold Contents <br />
      WmpAFold Contents <br />
      WmpAFold Contents <br />
    </WmpAText>
  </>
}
isOpen={isOpenSmall}
onClick={() => setIsOpenSmall(!isOpenSmall)}
onRemove={() => console.log("delete")}
/>

      `}
    />
  );
};
