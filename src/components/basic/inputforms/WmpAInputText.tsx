import React, { forwardRef } from "react";
import SvgIcon from "../../../assets/svg/SvgIcon";
import { getWdsKey, WMPA_INPUT_TEXT_COMP_NAME } from "../../../constants/constants";
import {
  StyledInput,
  StyledInputSpan,
  StyledInputWrap,
  StyledInputype,
  StyleInfoText,
  StyledunitSpan,
} from "./InputForm";
import { WmpAInputTextProps } from "../../../types/basicType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/docs/basic-wmpainputtext-component--wmp-a-input-text)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | helpText(string) | 다시 입력해 주세요, ... | 인풋에서 에러 발생 시, 에러 상태 설명 텍스트 |
 * | disabled(boolean) | true, false | 인풋 비활성화 여부 |
 * | readOnly(boolean) | true, false | 인풋 읽기 전용 여부 |
 * | placeholder(string) | 찾을 텍스트를 입력해주세요., ... | 인풋 placeholder 텍스트 |
 * | type(string) | text, date, ... | 인풋 타입 |
 * | textType(string) | downText, null(default) | 텍스트 위치 |
 * | width(string) | compact, sx, sm, md, lg, xl, xxl, fill (default) | width 사이즈 |
 * | height(string) | text_sm, text_md (default), text_lg | height 사이즈 |
 * | helpTextColor(string) | white, gray_50, ...| 에러 상태 알려주는 텍스트 색깔 |
 * | align(string) | left (default), right | 텍스트 정렬 |
 * | value(string) | 텍스트, ... | 인풋에 입력할 텍스트 |
 * | color(string) | gray_700, blue_700, red_500 | 텍스트 색깔 |
 * | unit (string) | input 안 "원" 텍스트
 * | isInputError(boolean) | true, false | 인풋 에러인지 아닌지  |
 * | ...rest | onKeyDown, ... | input 관련된 기타 attributes를 사용가능 |
 *
 * ## Events
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onChange(function) | () => {} | Chnage 이벤트 핸들러 |
 * | onKeyDown(function) | () => {} | Key 이벤트 핸들러 |
 * | onFocus(function) | () => {} | Focus(focus) 이벤트 핸들러 |
 * | onBlur(function) | () => {} | Focus(blur) 이벤트 핸들러 |
 */

const WmpAInputText = forwardRef<HTMLInputElement, WmpAInputTextProps>(
  (
    {
      helpText,
      disabled,
      readonly,
      placeholder,
      type,
      textType,
      width,
      height,
      helpTextColor,
      align,
      value,
      unit,
      isInputError,
      onChange,
      onKeyDown,
      onBlur,
      onFocus,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledInputWrap
        className="wmpAInputText"
        data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME, true)}
        st={{ textType, unit }}
      >
        <StyledInputype data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME)} st={{ wSize: width }}>
          <StyledInput
            data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME)}
            data-testid="wmpa-input-text"
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            type={type || "text"}
            placeholder={placeholder}
            disabled={disabled}
            readonly={readonly}
            value={value}
            ref={ref}
            st={{ hSize: height, align }}
            {...rest}
          />
          {/* 원 텍스트가 있을때만 */}
          {unit ? <StyledunitSpan data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME)}>{unit}</StyledunitSpan> : null}
        </StyledInputype>
        {/* 데이터가 있을 때만 노출 */}
        {/* 에러 메시지 true // span class=err 추가*/}
        {helpText ? (
          <StyleInfoText data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME)} className={isInputError ? "err" : ""}>
            {isInputError && helpText ? <SvgIcon name="icon_text_error" /> : null}
            <StyledInputSpan data-wds-key={getWdsKey(WMPA_INPUT_TEXT_COMP_NAME)} st={{ helpercolor: helpTextColor }}>
              {helpText}
            </StyledInputSpan>
          </StyleInfoText>
        ) : null}
      </StyledInputWrap>
    );
  }
);

export default WmpAInputText;
