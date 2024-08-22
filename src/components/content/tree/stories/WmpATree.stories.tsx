import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import WmpATree from "../WmpATree";
import WmpATitle from "../../title/WmpATitle";
import WmpAText from "../../text/WmpAText";
import WmpAToolTip from "../../tooltip/WmpAToolTip";
import WmpAButton from "../../../basic/button/WmpAButton";

export default {
  title: "content/WmpATree/Component",
  component: WmpATree,
  args: {},
} as ComponentMeta<typeof WmpATree>;

export const WmpATree_: ComponentStory<typeof WmpATree> = (args) => <WmpATree {...args} />;

WmpATree_.args = {
  title: (
    <>
      <WmpATitle
        button={
          <WmpAButton color="blue" fill="outline" onClick={() => {}} size="sm" type="button">
            메뉴생성
          </WmpAButton>
        }
        isBorderBottom
        titleSize="sm"
      >
        전체메뉴
      </WmpATitle>
    </>
  ),
  children: (
    <>
      <WmpATree.Depth
        title={
          <>
            <WmpAText
              color="black"
              fontStyle="body_md"
              tag="p"
              tooltip={<WmpAToolTip title="툴팁 타이틀">컨텐츠</WmpAToolTip>}
              weight="regular"
            >
              1st depth
            </WmpAText>
          </>
        }
        children={
          <>
            <WmpATree.Depth
              title="2st depth"
              children={
                <>
                  <WmpATree.Depth
                    title="3st depth"
                    buttons={
                      <>
                        <button className="btn_tree" type="button">
                          수정
                        </button>
                        <button className="btn_tree" type="button">
                          삭제
                        </button>
                      </>
                    }
                  ></WmpATree.Depth>
                </>
              }
              buttons={
                <>
                  <button className="btn_tree" type="button">
                    위로
                  </button>
                  <button className="btn_tree" type="button">
                    아래로
                  </button>
                  <button className="btn_tree" type="button">
                    생성
                  </button>
                  <button className="btn_tree" type="button">
                    수정
                  </button>
                  <button className="btn_tree" type="button">
                    삭제
                  </button>
                </>
              }
            ></WmpATree.Depth>
          </>
        }
        buttons={
          <>
            <button className="btn_tree" type="button">
              위로
            </button>
            <button className="btn_tree" type="button">
              아래로
            </button>
            <button className="btn_tree" type="button">
              생성
            </button>
            <button className="btn_tree" type="button">
              수정
            </button>
            <button className="btn_tree" type="button">
              삭제
            </button>
          </>
        }
      ></WmpATree.Depth>
    </>
  ),
};
