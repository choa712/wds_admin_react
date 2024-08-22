import React from "react";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import { StyledWmpAToolTip, StyledWmpAButton, StyledWmpABox } from "./ToolTip";
import WmpAToolTipList from "./WmpAToolTipList";
import { getWdsKey, WMPA_TOOLTIP_COMP_NAME } from "../../../constants/constants";
import { WmpAToolTipProps } from "../../../types/contentType";

function WmpAToolTipElement({ align, children, title, content, ...rest }: WmpAToolTipProps) {
  return (
    <StyledWmpAToolTip
      data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME, true)}
      data-testid="wmpa-tooltip"
      className="wmpAToolTip"
      st={{ align }}
      {...rest}
    >
      <StyledWmpAButton
        data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)}
        data-testid="wmpa-tooltip-button"
        type={"button"}
      >
        <SvgIcon name="icon_info_solid" />
      </StyledWmpAButton>
      <StyledWmpABox data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)} className="tooltip_box">
        {title ? (
          <div data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)} className="tooltip_tit">
            {title}
          </div>
        ) : null}
        <div data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)} className="tooltip_con">
          {content ? <p data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)}>{content}</p> : null}
          {children ? <ul data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)}>{children}</ul> : null}
        </div>
        <SvgIcon name="tooltip_subtract" />
      </StyledWmpABox>
    </StyledWmpAToolTip>
  );
}

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatooltip-component--wmp-a-tool-tip)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | align(string) | left(default), center, right | 툴팁 박스 정렬 |
 * | children(ReactNode) | WmpATooltTip.List의 자리 | 툴팁 박스 리스트 배열 |
 * | title(ReactNode) |  | 툴팁 박스 타이틀 |
 * | content(ReactNode) |  | 툴팁 박스 텍스트 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 */
const WmpAToolTip = Object.assign(WmpAToolTipElement, {
  /**
   * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatooltip-component--wmp-a-tool-tip-list)
   *
   * ## Props
   * ---------------------
   * | props | value | description |
   * | :--- | :--- | :--- |
   * | children(string) | 상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요., ... | 툴팁 박스 텍스트 |
   */
  List: WmpAToolTipList,
});

export default WmpAToolTip;
