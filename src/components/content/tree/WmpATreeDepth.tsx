import React, { useEffect, useState } from "react";
import WmpACheckbox from "../checkbox/WmpACheckbox";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import {
  StyledWmpATreeDepth,
  StyledWmpATreeWrap,
  StyledWmpATreeBtnToggle,
  StyledWmpATreeButtonArea,
  StyledWmpATreeTitleArea,
  StyledWmpATreeContent,
} from "./Tree";
import { WmpATreeDepthProps } from "../../../types/contentType";

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
 * | onChange(function) | | checkbox 컨트롤 메서드 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 */

function WmpATreeDepth({
  children,
  title,
  buttons,
  isChecked,
  inputId,
  indeterminate,
  onChange,
  ...rest
}: WmpATreeDepthProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWmpATreeDepth className={`wmpATreeDepth`} {...rest}>
      <StyledWmpATreeWrap className="wmpATreeWrap">
        {/* 하위 컴포넌트 없는 경우 토글 버튼 보이지 않음 */}
        {!!children ? (
          <StyledWmpATreeBtnToggle
            onClick={() => setIsOpen(!isOpen)}
            type={"button"}
            className={`btn_tree_toggle ${isOpen ? "isOpen" : ""}`}
          >
            <SvgIcon name="icon_arrow_right" size="xs" />
          </StyledWmpATreeBtnToggle>
        ) : null}
        <StyledWmpATreeTitleArea className={`title_tree_area`}>
          <WmpACheckbox
            indeterminate={indeterminate}
            checked={isChecked}
            inputId={inputId}
            name="checkbox"
            onChange={onChange}
            children={title}
          ></WmpACheckbox>
        </StyledWmpATreeTitleArea>
        <StyledWmpATreeButtonArea className="btn_tree_area">{buttons}</StyledWmpATreeButtonArea>
      </StyledWmpATreeWrap>
      {/* 토글버튼 클릭시 하위 컴포넌트 보임 */}
      {isOpen && <StyledWmpATreeContent className="wmpATreeContent">{children}</StyledWmpATreeContent>}
    </StyledWmpATreeDepth>
  );
}

export default WmpATreeDepth;
