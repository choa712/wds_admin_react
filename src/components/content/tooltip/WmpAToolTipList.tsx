import React from "react";
import { getWdsKey, WMPA_TOOLTIP_COMP_NAME } from "../../../constants/constants";
import { StyledWmpAList } from "./ToolTip";
import { WmpAToolTipListProps } from "../../../types/contentType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatooltip-component--wmp-a-tool-tip-list)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | children(string) | 상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요., ... | 툴팁 박스 텍스트 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 *
 */
function WmpAToolTipList({ children, ...rest }: WmpAToolTipListProps) {
  return (
    <StyledWmpAList data-wds-key={getWdsKey(WMPA_TOOLTIP_COMP_NAME)} {...rest}>
      {children}
    </StyledWmpAList>
  );
}

export default WmpAToolTipList;
