import React, { forwardRef } from "react";
import { getWdsKey, WMPA_TEXT_AREA_COMP_NAME } from "../../../constants/constants";
import { StyledTextArea, StyledInputSpan, StyledTextareaWrap, StyleInfoText } from "./InputForm";
import { WmpATextareaProps } from "../../../types/basicType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/docs/basic-wmpatextarea-component--wmp-a-text-area)
 *
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | disabled(boolean) | true, false | 인풋 비활성화 여부 |
 * | readonly(boolean) | true, false | 인풋 읽기 전용 여부 |
 * | placeholder(string) | 찾을 텍스트를 입력해주세요., ... | 인풋 placeholder 텍스트 |
 * | textType(string) | right, down | 텍스트 위치 |
 * | value(string) | 텍스트, ... | 인풋 텍스트 |
 * | helperTextColor(string) | white, gray_50, ... | 헬퍼 텍스트 컬러 |
 * | currentTextLength(string) | 10, ... | 작성중인 글자 수 |
 * | maxTextLength(string) | /1000, /100, ... | 노출되는 최대 글자수(/가 붙고 max 글자 수가 와야 함) |
 * | inputMaxTextLength(number) | 30, 100 ... | input의 maxLength 속성 |
 * | ...rest | onKeyDown, ... | input 관련된 기타 attributes를 사용가능 |
 *
 * ## Events
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onChange(function) | () => {} | Chnage 이벤트 핸들러 |
 * | onFocus(function) | () => {} | Focus(focus) 이벤트 핸들러 |
 * | onBlur(function) | () => {} | Focus(blur) 이벤트 핸들러 |
 */
const WmpATextArea = forwardRef<HTMLTextAreaElement, WmpATextareaProps>(
  (
    {
      disabled,
      readonly,
      placeholder,
      textType,
      value,
      helperTextColor,
      currentTextLength,
      maxTextLength,
      onChange,
      onFocus,
      onBlur,
      inputMaxTextLength,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledTextareaWrap
        className="wmpATextArea"
        data-wds-key={getWdsKey(WMPA_TEXT_AREA_COMP_NAME, true)}
        st={{ areatextType: textType }}
      >
        <StyledTextArea
          data-wds-key={getWdsKey(WMPA_TEXT_AREA_COMP_NAME)}
          data-testid="wmpa-text-area"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          readonly={readonly}
          value={value}
          ref={ref}
          maxLength={inputMaxTextLength}
          {...rest}
        ></StyledTextArea>
        {/* 데이터가 있을 때만 노출 */}
        {currentTextLength && maxTextLength ? (
          <StyleInfoText data-wds-key={getWdsKey(WMPA_TEXT_AREA_COMP_NAME)}>
            <StyledInputSpan data-wds-key={getWdsKey(WMPA_TEXT_AREA_COMP_NAME)} st={{ helpercolor: helperTextColor }}>
              <em data-wds-key={getWdsKey(WMPA_TEXT_AREA_COMP_NAME)}>{currentTextLength}</em>
              {maxTextLength}
            </StyledInputSpan>
          </StyleInfoText>
        ) : null}
      </StyledTextareaWrap>
    );
  }
);

export default WmpATextArea;
