import React from "react";
import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Example from "../../../../stories/components/Example";
import WmpAButton from "../WmpAButton";

export default {
  title: "Basic/WmpAButton/Examples",
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
  button {
    flex-basis: 236px;
    ~ button {
      margin-left: 6px;
    }
  }
`;

export const Basic: ComponentStory<typeof Example> = () => {
  return (
    <Example
      code={
        <ButtonBox>
          <WmpAButton size="xl" fill="solid" color="red">
            어드민 새로고침
          </WmpAButton>
        </ButtonBox>
      }
      codeString={`
<ButtonBox>
    <WmpAButton size="xl" fill="solid" color="red">
        어드민 새로고침
    </WmpAButton>
</ButtonBox>
`}
    />
  );
};

const ButtonBox2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
  button {
    flex-basis: 112px;
    ~ button {
      margin-left: 6px;
    }
  }
`;

export const MultiButton: ComponentStory<typeof Example> = () => {
  return (
    <Example
      code={
        <ButtonBox2>
          <WmpAButton size="xl" fill="solid" color="red">
            검색
          </WmpAButton>
          <WmpAButton size="xl" fill="outline" color="soft">
            초기화
          </WmpAButton>
        </ButtonBox2>
      }
      codeString={`
<ButtonBox2>
    <WmpAButton size="xl" fill="solid" color="red">
        검색
    </WmpAButton>
    <WmpAButton size="xl" fill="outline" color="soft">
        초기화
    </WmpAButton>
</ButtonBox2>
`}
    />
  );
};

const ButtonBox3 = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: auto;
    ~ button {
      margin-left: 6px;
    }
  }
`;

export const SmallButton: ComponentStory<typeof Example> = () => {
  return (
    <Example
      code={
        <ButtonBox3>
          <WmpAButton size="sm" fill="outline" color="blue">
            문의하기
          </WmpAButton>
        </ButtonBox3>
      }
      codeString={`
<ButtonBox3>
    <WmpAButton size="sm" fill="outline" color="blue">
        문의하기
    </WmpAButton>
</ButtonBox3>
`}
    />
  );
};
