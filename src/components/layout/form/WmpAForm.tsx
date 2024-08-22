import React, { forwardRef } from "react";
import { StyledWmpAForm, StyledWmpAContainer, StyledFormBtn } from "./Form";
import WmpAFormLabel from "./WmpAFormLabel";
import WmpAFormBox from "./WmpAFormBox";
import { getWdsKey, WMPA_FORM_COMP_NAME } from "../../../constants/constants";
import { WmpAFormProps } from "../../../types/layoutType";

const WmpAFormContainer = forwardRef<HTMLFormElement, WmpAFormProps>(
  ({ onSubmit, children, topBorder = "regular", bottomBorder = "regular", button, ...rest }, ref) => {
    return (
      <StyledWmpAForm
        data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME, true)}
        data-testid="wmpa-form"
        onSubmit={onSubmit}
        className="wmpAForm"
        ref={ref}
        {...rest}
      >
        <StyledWmpAContainer
          data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}
          st={{ topBorder, bottomBorder }}
          className="wmpAFormContainer"
        >
          <div className="container_wrap" data-wds-key={getWdsKey(WMPA_FORM_COMP_NAME)}>
            {children}
          </div>
          {button ? <StyledFormBtn className="formBtnWrap">{button}</StyledFormBtn> : null}
        </StyledWmpAContainer>
      </StyledWmpAForm>
    );
  }
);

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/layout-wmpaform-component--wmp-a-form)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | children(React.ReactNode) | 텍스트, 인풋, 드롭다운 등 콤포넌트 |
 * | topBorder(string) | bold, regular(default), none | 폼 상단 보더값 |
 * | bottomBorder(string) | bold, regular(default), none | 폼 하단 보더값 |
 * | button(ReactNode) | WmpAButton | Form 하단의 WmpAButton의 자리 |
 * | ...rest |  | 컨테이너 form의 기본 attributes |
 *
 * ## Events
 *
 * ----------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onSubmit(function) | () => {} | form submit 핸들러 |
 */

const WmpAForm = Object.assign(WmpAFormContainer, {
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
  Box: WmpAFormBox,

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
  Label: WmpAFormLabel,
});

export default WmpAForm;
