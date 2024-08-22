import React from "react";
import "../../../index.css";
import { StyledWmpATree, StyledWmpATreeHeader, StyledWmpATreeBody } from "./Tree";
import WmpATreeDepth from "./WmpATreeDepth";
import { getWdsKey, WMPA_TREE_COMP_NAME } from "../../../constants/constants";
import { WmpATreeProps } from "../../../types/contentType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatree-component--wmp-a-tree)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | title(ReactNode) | | 타이틀 컴포넌트 |
 * | children(ReactNode) | WmpATree.Depth | 하위 컴포넌트 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 */
function WmpATreeElement({ title, children, ...rest }: WmpATreeProps) {
  return (
    <StyledWmpATree
      data-wds-key={getWdsKey(WMPA_TREE_COMP_NAME, true)}
      className="wmpATree"
      data-testid="wmpa-tree"
      {...rest}
    >
      <StyledWmpATreeHeader data-wds-key={getWdsKey(WMPA_TREE_COMP_NAME)} className="wmpATreeHeader">
        {title}
      </StyledWmpATreeHeader>
      <StyledWmpATreeBody data-wds-key={getWdsKey(WMPA_TREE_COMP_NAME)} className="wmpATreeBody">
        {children}
      </StyledWmpATreeBody>
    </StyledWmpATree>
  );
}
const WmpATree = Object.assign(WmpATreeElement, {
  /**
   * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-WmpATree--wmp-a-tree-one-depth)
   *
   * ## Props
   *
   * ---------------------
   *
   * | props | value | description |
   * | :--- | :--- | :--- |
   * | children(ReactNode) | WmpATree.Depth | 하위 컴포넌트 |
   * | title(ReactNode) | | 타이틀 |
   * | inputId(string) | | checkbox inputid |
   * | isChecked(boolean) | true, false | 컴포넌트 좌측 체크박스 active 여부 |
   * | indeterminate(boolean) | true, false | 컴포넌트 좌측 체크박스 indeterminate 여부 |
   * | buttons(ReactNode) | | 우측 버튼들 (위, 아래, 생성, 수정, 삭제 등) |
   * | onChangeCheckbox(function) | {() => setIsActive(!isActive)} | isActive 컨트롤 메서드 |
   * | ...rest |  | 컨테이너 div의 기본 attributes |
   */
  Depth: WmpATreeDepth,
});
export default WmpATree;
