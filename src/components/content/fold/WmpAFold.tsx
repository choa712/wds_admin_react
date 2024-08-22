import React from "react";
import WmpATitle from "../title/WmpATitle";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import { StyledWmpAFold, StyledWmpAFoldWrap, StyledWmpAHeader, StyledWmpABody } from "./Fold";
import { getWdsKey, WMPA_FOLD_COMP_NAME } from "../../../constants/constants";
import { WmpAFoldProps } from "../../../types/layoutType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/layout-WmpAFold--title)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | title(string) | | 타이틀 내용 |
 * | children(ReactNode) | | 컨텐츠 컴포넌트 |
 * | isOpen(boolean) | true, false | true 시 fold 컨텐츠 보임 |
 * | size(string) | md(default), sm | fold 사이즈 |
 * | hideText(string[]) | ["카탈로그(입력안함)", ...,] | open false 시 보일 텍스트 배열 |
 * | onClick(event) | {() => handleOpen()} | 클릭 이벤트 핸들러 |
 * | onRemove(event) | {() => handleRemove()} | fold 삭제 이벤트 핸들러 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 */

function WmpAFold({ title, hideText, children, isOpen, onClick, size, onRemove, ...rest }: WmpAFoldProps) {
  return (
    <StyledWmpAFold
      data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME, true)}
      className="wmpAFold"
      data-testid="wmpa-fold"
      st={{ size }}
      {...rest}
    >
      <StyledWmpAFoldWrap className="wmpAFoldWrap">
        <StyledWmpAHeader data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)} className="wmpAFoldHeader">
          <WmpATitle data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)}>{title}</WmpATitle>
          <button
            onClick={onClick}
            type={"button"}
            className={`btnFoldToggle ${isOpen ? "unfold" : ""}`}
            data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)}
          >
            <SvgIcon name="icon_arrow_up" size="sm" />
          </button>
          {size === "sm" ? (
            <>
              <button
                onClick={onRemove}
                type={"button"}
                data-testid="wmpa-fold-remove-button"
                className={`btnFoldDelete ${isOpen ? "unfold" : ""}`}
              >
                <SvgIcon name="icon_close" size="compact" />
                삭제
              </button>
            </>
          ) : (
            <>
              {!isOpen ? (
                <div className="foldInfo" data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)}>
                  {hideText}
                </div>
              ) : null}
            </>
          )}
        </StyledWmpAHeader>

        {!!isOpen ? (
          <StyledWmpABody data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)} className="wmpAFoldBody">
            <div className="foldContent" data-wds-key={getWdsKey(WMPA_FOLD_COMP_NAME)}>
              {children}
            </div>
          </StyledWmpABody>
        ) : null}
      </StyledWmpAFoldWrap>
    </StyledWmpAFold>
  );
}

export default WmpAFold;
