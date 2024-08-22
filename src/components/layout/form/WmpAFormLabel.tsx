import React from "react";
import { StyledWmpAFormLabel } from "./Form";
import WmpAText from "../../content/text/WmpAText";
import { getWdsKey, WMPA_FORM_COMP_NAME } from "../../../constants/constants";
import { WmpAFormLabelProps } from "../../../types/layoutType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/layout-wmpaform-component--wmp-a-form-label)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | children(ReactNode) | 타이틀, ... | 타이틀 |
 * | labelWidth(string) | 112px(default) | 넓이값 커스텀 |
 * | isRequired(boolean) | true, false(default) | 텍스트 우측 상단에 빨간색 필수 표시 |
 * | inputId(string) | "input_1", "input_2", ... | input id |
 * | tooltip(ReactNode) | <WmpAToolTip /> | 툴팁 컴포넌트 |
 * | ...rest |  | 컨테이너 label의 기본 attributes |
 */
function WmpAFormLabel({ children, tooltip, inputId, isRequired, labelWidth, ...rest }: WmpAFormLabelProps) {
  return (
    <StyledWmpAFormLabel
      data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}
      htmlFor={inputId}
      className="wmpAFormLabel"
      st={{ labelWidth }}
      {...rest}
    >
      <WmpAText color="black" fontStyle="body_sm" tag="span" weight="bold" required={isRequired}>
        {children}
      </WmpAText>
      {tooltip}
    </StyledWmpAFormLabel>
  );
}

export default WmpAFormLabel;
