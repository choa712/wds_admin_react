import React, { forwardRef } from "react";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import {
  StyledCalendarPickerWrap,
  StyledCalendarWrap,
  StyledCalendarInput,
  StyledCalendarPicker,
  StyledBlind,
} from "./TimePicker";
import { WMPA_TIME_PICKER_COMP_NAME, getWdsKey } from "../../../constants/constants";
import { WmpATimePickerTitleProps } from "../../../types/contentType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatimepicker-component--wmp-a-time-picker-title)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | hour(any) |  | 시 |
 * | minute(any) |  | 분 |
 * | type(string) | text, date, ... | 인풋 타입 |
 * | disabled(boolean) | true, false (default) | 비활성화 여부 |
 * | width(string) | datetime, date, time | input size |
 * | isOpen(boolean) | | 클릭 후 타임픽커 펼쳐짐 |
 * | ...rest | onKeyDown, ... | input 관련된 기타 attributes를 사용가능 |
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onChange(function) | () => {} | 이벤트 change 이벤트 핸들러 |
 */
const WmpATimePickerTitle = forwardRef<HTMLInputElement, WmpATimePickerTitleProps>(
  (
    { hour, minute, type, value, width = "time", onClick, name, disabled, onChange = () => {}, isOpen, ...rest },
    ref
  ) => {
    return (
      <div>
        {/* on: 클릭 후 타임픽커 펼쳐질 때 클래스 추가 */}
        <StyledCalendarPickerWrap
          data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
          className={`wmpACalendarPickerWrap ${isOpen ? "on" : ""}`}
          {...rest}
        >
          <StyledCalendarWrap
            className="wmpAPickerWrap"
            data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
            onClick={onClick}
          >
            <StyledCalendarInput
              ref={ref}
              onChange={onChange}
              data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
              type={type || "text"}
              value={`${hour || "00"}:${minute || "00"}`}
              name={name}
              disabled={disabled}
              st={{ width }}
            />
            <StyledCalendarPicker
              data-testid="wmpa-time-picker-open-button"
              data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
              type="button"
              disabled={disabled}
            >
              <SvgIcon name="icon_time" />
              <StyledBlind data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)} className="blind">
                시간선택
              </StyledBlind>
            </StyledCalendarPicker>
          </StyledCalendarWrap>
        </StyledCalendarPickerWrap>
      </div>
    );
  }
);

export default WmpATimePickerTitle;
