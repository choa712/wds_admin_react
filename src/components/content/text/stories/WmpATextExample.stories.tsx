import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Example from "../../../../stories/components/Example";
import WmpAText from "../WmpAText";
import WmpATitle from "../../title/WmpATitle";

export default {
  title: "Content/WmpAText/Examples",
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
  return (
    <Example
      code={
        <>
          <WmpATitle titleSize="md">타이틀입니다.</WmpATitle>
          <div>
            <WmpAText tag="span" required bulletLeft="left" fontStyle="body_sm">
              상품명
            </WmpAText>
          </div>
          <WmpAText color="gray_400">텍스트입니다.</WmpAText>
        </>
      }
      codeString={`
<>
    <WmpATitle titleSize="md">타이틀입니다.</WmpATitle>
    <div>
        <WmpAText tag="span" required bulletLeft="left" fontStyle="body_sm">
            상품명
        </WmpAText>
    </div>
    <WmpAText color="gray_400">텍스트입니다.</WmpAText>
</>
`}
    />
  );
};
