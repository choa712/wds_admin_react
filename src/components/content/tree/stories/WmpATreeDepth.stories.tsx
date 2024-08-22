import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpATree from "../WmpATree";
import WmpAText from "../../text/WmpAText";
import WmpAToolTip from "../../tooltip/WmpAToolTip";

export default {
  title: "content/WmpATree/Component",
  component: WmpATree.Depth,
  args: {},
} as ComponentMeta<typeof WmpATree.Depth>;

export const WmpATreeDepth_: ComponentStory<typeof WmpATree.Depth> = (args) => {
  return (
    <WmpATree>
      <WmpATree.Depth title={args.title} children={args.children} buttons={args.buttons}></WmpATree.Depth>
    </WmpATree>
  );
};

WmpATreeDepth_.args = {
  title: (
    <WmpAText
      color="black"
      fontStyle="body_md"
      tag="p"
      tooltip={<WmpAToolTip title="툴팁 타이틀">컨텐츠</WmpAToolTip>}
      weight="regular"
    >
      1st depth
    </WmpAText>
  ),
  children: (
    <>
      <WmpATree.Depth title="2st depth" />
    </>
  ),
  buttons: (
    <>
      <button type={"button"} className="btn_tree">
        위로
      </button>
      <button type={"button"} className="btn_tree">
        아래로
      </button>
      <button type={"button"} className="btn_tree">
        생성
      </button>
      <button type={"button"} className="btn_tree">
        수정
      </button>
      <button type={"button"} className="btn_tree">
        삭제
      </button>
    </>
  ),
};
