import React from "react";
import { getWdsKey, WMPA_FORM_COMP_NAME } from "../../../constants/constants";
import { StyledWmpAFormBody, StyledWmpAFormBox, StyledWmpAFormHeader } from "./Form";
import { WmpAFormBoxProps } from "../../../types/layoutType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/layout-wmpaform-component--wmp-a-form-box)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | children(React.ReactNode) | 텍스트, 인풋, 드롭다운 등 컴포넌트 |
 * | title(ReactNode) | WmpAForm.Label | WmpAForm.Label의 자리 |
 * | topPadding(string) | 6px(default) | 상단 여백 |
 * | bottomPadding(string) | 6px(default) | 하단 여백 |
 * | vAlign(string) | top:상단 정렬 /중앙정렬(default) | 타이틀 수직 정렬 |
 * | ...rest |  | 컨테이너 div의 기본 attributes |
 */
function WmpAFormBox({ children, title, topPadding, bottomPadding, vAlign, ...rest }: WmpAFormBoxProps) {
  return (
    <StyledWmpAFormBox
      data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}
      className="wmpAFormBox"
      st={{ topPadding, bottomPadding, vAlign }}
      {...rest}
    >
      <StyledWmpAFormHeader data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}>{title}</StyledWmpAFormHeader>
      <StyledWmpAFormBody data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}>{children}</StyledWmpAFormBody>
    </StyledWmpAFormBox>
  );
}

export default WmpAFormBox;
