import React, { forwardRef } from "react";
import "../../../index.css";
import { StyledWmpATimeTitleArea } from "./TimePicker";
import WmpATimePickerTitle from "./WmpATimePickerTitle";
import { WMPA_TIME_PICKER_COMP_NAME, getWdsKey } from "../../../constants/constants";
import { WmpATimePickerBoxProps } from "../../../types/contentType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatimepicker-component--wmp-a-time-picker-box)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | isOpen(boolean) | | 클릭 후 타임픽커 펼쳐짐 |
 * | hour(string) | 00, 10, 05, ... | 시간 텍스트 |
 * | minute(string) | 00, 10, 05, ... | 분 텍스트 |
 * | children(ReactNode) | WmpATimePicker | WmpATimePicker의 자리 |
 * | ...rest | onKeyDown, ... | input 관련된 기타 attributes를 사용가능 |
 *
 * ## Events
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onClick(function) | () => {} | 시간 클릭 이벤트 핸들러 |
 */

const WmpATimePickerBox = forwardRef<HTMLInputElement, WmpATimePickerBoxProps>(
  ({ hour, minute, children, name, value, onClick, isOpen, ...rest }, ref) => {
    return (
      <StyledWmpATimeTitleArea
        data-testid="wmpa-time-picker-box"
        data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
        className="wmpATimePickerBox"
        {...rest}
      >
        <WmpATimePickerTitle
          ref={ref}
          onClick={onClick}
          hour={hour}
          minute={minute}
          isOpen={isOpen}
          name={name}
          value={value}
        />
        {isOpen ? children : null}
      </StyledWmpATimeTitleArea>
    );
  }
);

export default WmpATimePickerBox;
