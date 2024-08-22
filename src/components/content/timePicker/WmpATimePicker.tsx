import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import { WmpAButton } from "../../basic";
import {
  StyledWmpATimePickerArea,
  StyledTimePicker,
  StyledTimePickerContainer,
  StyledTimePickerColon,
  StyledTimeLabel,
  StyledTimePickerButton,
  StyledButtonRefresh,
} from "./TimePicker";
import WmpATimePickerBox from "./WmpATimePickerBox";
import WmpATimePickerTitle from "./WmpATimePickerTitle";
import { WMPA_TIME_PICKER_COMP_NAME, getWdsKey } from "../../../constants/constants";
import WheelPicker from "./WheelPicker";
import { getTime, isSafeResetValue } from "./utils/utils";
import { WmpATimePickerProps } from "../../../types/contentType";

const EXTRA_NUMBER = 0;

const allHours = 23 + EXTRA_NUMBER;
const allMinutes = 60 + EXTRA_NUMBER;

const getHours = () => {
  const hour: (number | string)[] = [];
  for (let i = 0; i <= allHours; i++) {
    const time = i > 9 ? `${i}` : `0${i}`;
    hour.push(time);
  }

  return hour;
};

const getMinutes = () => {
  const minutes: (number | string)[] = [];
  for (let i = 0; i < allMinutes; i++) {
    const time = i > 9 ? `${i}` : `0${i}`;
    minutes.push(time);
  }

  return minutes;
};

const HOURS = [...getHours(), ...getHours(), ...getHours()];
const MINUTES = [...getMinutes(), ...getMinutes(), ...getMinutes()];

const WmpATimePickerElement = forwardRef<HTMLInputElement, WmpATimePickerProps>(
  ({ isCalendar, isOpen, value, name, resetValue, onChange, onShow, onReset, onSubmit, ...rest }, ref) => {
    const backdropRef = useRef<HTMLDivElement | null>(null);

    const [isInnerOpen, setIsInnerOpen] = useState(false);
    const [isHourScrollEnd, setIsHourScrollEnd] = useState(false);
    const [isMinuteScrollEnd, setIsMinuteScrollEnd] = useState(false);

    const scrollSelectSubject = `scroll-select-subject-${Math.random().toString(36).substr(2, 11)}`;
    const scrollSelectSubject2 = `scroll-select-subject-${Math.random().toString(36).substr(2, 11)}`;

    useEffect(() => {
      const hours = document.getElementById(scrollSelectSubject);
      const minutes = document.getElementById(scrollSelectSubject2);

      hours?.addEventListener("scroll", (e) => {
        const targets = e.target as any;
        if (e && e.target) {
          if (targets.scrollTop === 0 || targets.scrollTop === 1846) {
            targets.scrollTo({ top: 624 });
          }
        }
      });
      minutes?.addEventListener("scroll", (e) => {
        const targets = e.target as any;
        if (e && e.target) {
          if (targets.scrollTop === 0 || targets.scrollTop === 4654) {
            targets.scrollTo({ top: 1560 });
          }
        }
      });
    }, []);

    useEffect(() => {
      if (isOpen !== undefined) setIsInnerOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
      if (rest && Object.keys(rest).includes("getIsHourScrollEnd")) {
        rest.getIsHourScrollEnd(isHourScrollEnd);
      }
      if (rest && Object.keys(rest).includes("getIsMinuteScrollEnd")) {
        rest.getIsMinuteScrollEnd(isMinuteScrollEnd);
      }
    }, [rest.getIsHourScrollEnd, isHourScrollEnd, rest, isMinuteScrollEnd]);

    const [hourObj, setHourObj] = useState({
      pickerOpen: false,
      data: HOURS.map((el) => String(el)),
      defaultSelection: getTime(value, "hour"),
      selection: HOURS.map((el) => String(el))[0],
    });

    const [minuteObj, setMinuteObj] = useState({
      pickerOpen: false,
      data: MINUTES.map((el) => String(el)),
      defaultSelection: getTime(value, "minute"),
      selection: MINUTES.map((el) => String(el))[0],
    });

    const TimeLabel = () => {
      return (
        <StyledTimeLabel data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)} id="time-label">
          <StyledTimePickerColon data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}>
            <SvgIcon name="icon_time_colon" />
          </StyledTimePickerColon>
        </StyledTimeLabel>
      );
    };

    const CalendarElement = () => {
      //  isCalendar: 캘린더에는 버튼 노출하지 않음
      if (isCalendar) return null;

      return (
        <StyledTimePickerButton data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}>
          <WmpAButton
            data-testid="wmpa-time-picker-submit-button"
            size="sm"
            color="red"
            fill="outline"
            type="button"
            onClick={(e) => {
              if (onSubmit) onSubmit(e);
              setIsInnerOpen(false);
            }}
          >
            확인
          </WmpAButton>
          <StyledButtonRefresh
            data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}
            data-testid="wmpa-time-picker-reset"
            type="button"
            onClick={(e) => {
              if (onReset) {
                onReset(e);
                if (onChange) onChange(resetValue || "12:00");

                setHourObj({
                  ...hourObj,
                  selection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[0] : "12",
                  defaultSelection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[0] : "12",
                });

                setMinuteObj({
                  ...minuteObj,
                  selection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[1] : "00",
                  defaultSelection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[1] : "00",
                });
              }
            }}
          >
            <SvgIcon name="icon_refresh" />
            초기화
          </StyledButtonRefresh>
        </StyledTimePickerButton>
      );
    };

    // isCalendar: 캘린더일 때 true

    const func = useCallback(() => {
      setHourObj({
        ...hourObj,
        selection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[0] : "12",
        defaultSelection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[0] : "12",
      });

      setMinuteObj({
        ...minuteObj,
        selection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[1] : "00",
        defaultSelection: resetValue && isSafeResetValue(resetValue) ? resetValue.split(":")[1] : "00",
      });
    }, [hourObj, minuteObj, resetValue]);

    useEffect(() => {
      if (rest.onCall) {
        rest.onCall(func);
      }
    }, [func, rest.onCall]);

    useEffect(() => {
      const checkIfClickedOutside = (e: any) => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu

        if (
          !isHourScrollEnd &&
          !isMinuteScrollEnd &&
          isInnerOpen &&
          backdropRef.current &&
          !backdropRef.current.contains(e.target)
        ) {
          setIsInnerOpen(false);
        }
      };

      document.addEventListener("mousedown", checkIfClickedOutside);

      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [isInnerOpen, isHourScrollEnd, isMinuteScrollEnd]);

    const renderTimePicker = () => {
      return (
        <StyledWmpATimePickerArea
          data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME, true)}
          data-testid="wmpa-time-picker"
          className={`wmpATimePickerArea ${isCalendar ? "isCalendar" : ""}`}
        >
          <StyledTimePicker data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}>
            <StyledTimePickerContainer data-wds-key={getWdsKey(WMPA_TIME_PICKER_COMP_NAME)}>
              <div id="hours-div">
                <WheelPicker
                  type="hour"
                  getIsScrollEnd={(isEnd) => setIsHourScrollEnd(isEnd)}
                  animation="flat"
                  data={hourObj.data}
                  height={26}
                  parentHeight={250}
                  defaultSelection={hourObj.defaultSelection as string}
                  updateSelection={(selectedIndex) => {
                    if (onChange) {
                      let values = value && value.includes(":") ? value : "00:00";
                      const valueList = values.split(":");
                      valueList[0] = hourObj.data[selectedIndex];
                      onChange(valueList.join(":"));
                    }

                    setHourObj({
                      ...hourObj,
                      selection: hourObj.data[selectedIndex],
                      defaultSelection: selectedIndex,
                    });
                  }}
                  scrollerId={scrollSelectSubject}
                  {...rest}
                />
              </div>
              <div id="minutes-div">
                <WheelPicker
                  getIsScrollEnd={(isEnd) => setIsMinuteScrollEnd(isEnd)}
                  type="minute"
                  animation="flat"
                  data={minuteObj.data}
                  height={26}
                  parentHeight={250}
                  defaultSelection={minuteObj.defaultSelection as string}
                  updateSelection={(selectedIndex) => {
                    if (onChange) {
                      let values = value && value.includes(":") ? value : "00:00";
                      const valueList = values.split(":");
                      valueList[1] = minuteObj.data[selectedIndex];
                      onChange(valueList.join(":"));
                    }
                    setMinuteObj({
                      ...minuteObj,
                      selection: minuteObj.data[selectedIndex],
                      defaultSelection: selectedIndex,
                    });
                  }}
                  scrollerId={scrollSelectSubject2}
                />
              </div>
              <TimeLabel />
            </StyledTimePickerContainer>
          </StyledTimePicker>
          <CalendarElement />
        </StyledWmpATimePickerArea>
      );
    };

    if (isCalendar) {
      return renderTimePicker();
    }

    const handleClick = () => {
      if (onShow) onShow(!isInnerOpen);
      if (!isHourScrollEnd && !isMinuteScrollEnd) {
        setIsInnerOpen(!isInnerOpen);
      }
    };

    return (
      <div ref={backdropRef}>
        <WmpATimePickerBox
          name={name}
          isOpen={isInnerOpen}
          hour={getTime(value, "hour")}
          minute={getTime(value, "minute")}
          onClick={handleClick}
          ref={ref}
          {...rest}
        >
          {renderTimePicker()}
        </WmpATimePickerBox>
        {/* <WmpADimmed onClose={() => setIsInnerOpen(false)} zIndex={2} isOpen={isInnerOpen} /> */}
      </div>
    );
  }
);

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatimepicker-component--wmp-a-time-picker)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | isOpen(boolean) | true, false(default) | 캘린더 렌더링 여부 |
 * | isCalendar(boolean) | true, false(default) | 캘린더 TimePickerButton 버튼 사용 여부 |
 * | value(string) | "04:29", "09:45", ... | 시간 값 |
 * | resetValue(string) | "22:34" | 초기화하려는 인풋(기본은 12:00) |
 * | ...rest | onKeyDown, ... | input 관련된 기타 attributes를 사용가능 |
 * ## Events
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onChange(function) | () => {} | 시간 클릭 및 스크롤 선택 시 이벤트 핸들러 |
 * | onSubmit(function) | () => {} | 확인 클릭 이벤트 핸들러 |
 * | onReset(function) | () => {} | 초기화 클릭 이벤트 핸들러 |
 * | onShow(function) | (isOpen) => {} | 타임피커 클릭 이벤트 핸들러 |
 */

const WmpATimePicker = Object.assign(WmpATimePickerElement, {
  /**
   * ## [Storybook](https://wds-dev.wemakeprice.work/react/index.html?path=/story/content-wmpatitle--default)
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
   *
   * ## Events
   *
   * ---------------------
   *
   * | props | value | description |
   * | :--- | :--- | :--- |
   * | onClick(function) | () => {} | 시간 클릭 이벤트 핸들러 |
   */
  Box: WmpATimePickerBox,
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
   * | width(string) | datetime, date, time | width 사이즈 |
   * | isOpen(boolean) | | 클릭 후 타임픽커 펼쳐짐 |
   *
   * ## Props
   *
   * ---------------------
   *
   * | props | value | description |
   * | onChange(function) | () => {} | 이벤트 change 이벤트 핸들러 |
   */
  Title: WmpATimePickerTitle,
});

export default WmpATimePicker;
