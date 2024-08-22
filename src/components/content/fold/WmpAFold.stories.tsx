import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WmpAFold from "./WmpAFold";
import WmpAText from "../text/WmpAText";

export default {
  title: "Content/WmpAFold/Component",
  component: WmpAFold,
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
      description: "fold 사이즈",
    },
  },
} as ComponentMeta<typeof WmpAFold>;

const Template: ComponentStory<typeof WmpAFold> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(args.isOpen as boolean);
  }, [args.isOpen]);

  return (
    <WmpAFold
      {...args}
      onClick={() => setIsOpen(!isOpen)}
      onRemove={() => {
        console.log("onRemove");
      }}
      isOpen={isOpen}
    />
  );
};

export const WmpAFold_ = Template.bind({});

WmpAFold_.args = {
  hideText: (
    <div>
      <div>카탈로그 입력안함</div>
      <div>카탈로그 입력안함</div>
    </div>
  ),
  title: "카탈로그 정보",
  children: (
    <>
      <WmpAText color="black" fontStyle="body_md" tag="p">
        카탈로그 컨텐츠 텍스트 영역
      </WmpAText>
    </>
  ),
  isOpen: false,
};
