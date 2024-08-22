import styled, { css } from "styled-components";
import { rgba } from "polished";
import { ui } from "../../../assets/style";

const alignCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const timePickerDim = css`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  ${ui.size("100%", "52px")};
  pointer-events: none;
  z-index: 2;
`;
// 캘린더 공통: datapicker와 같이 사용. 하단 버튼(초기화) 스타일
export const calendarRefreshButton = css`
  ${ui.size("59px", "24px")};
  ${ui.font_style.caption_sm.regular};
  color: ${ui.color_basic_solid.gray_800};
  border-radius: 12px;
  svg {
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
  &:hover {
    background-color: ${ui.color_basic_solid.gray_100};
  }
`;
// 캘린더 공통: datapicker와 같이 사용. 인풋 넓이
export const inputWSize = {
  datetime: 157,
  date: 117,
  time: 77,
};
// 캘린더 공통: datapicker와 같이 사용. 인풋 스타일
export const calenderInput = (width: string) => css`
  height: 34px;
  padding: 0 12px 0 11px;
  width: ${width}px;
  background: ${ui.color_basic_solid.white};
  vertical-align: top;
  color: ${ui.color_basic_solid.gray_900};
  border-radius: 4px 0 0 4px;
  ${ui.font_style.body_sm.regular};
  appearance: none;
  &::placeholder,
  &:disabled,
  &:read-only {
    color: ${ui.color_basic_solid.gray_600};
  }
  &:disabled {
    background: ${ui.color_basic_solid.gray_50};
  }
`;
// 캘린더 공통: datapicker와 같이 사용. 버튼 스타일
export const calenderButton = css`
  ${ui.size("41px", "34px")};
  background: ${ui.color_basic_solid.white};
  border-left: 1px solid ${ui.color_basic_solid.gray_300};
  border-radius: 0 4px 4px 0;
  svg {
    margin: 0 auto;
  }
  &:disabled {
    background: ${ui.color_basic_solid.gray_50};
  }
`;

export const StyledWmpATimePickerArea = styled.div`
  position: absolute;
  top: 38px;
  box-sizing: border-box;
  max-width: 120px;
  width: 100%;
  border: 1px solid ${ui.color_basic_solid.gray_800};
  background-color: ${ui.color_basic_solid.white};
  border-radius: 4px;
  padding: 15px 19px;
  z-index: 5;
  &.isCalendar {
    max-width: 80px;
    border: 0 none;
    padding: ${ui.space.space_none};
  }
`;
export const StyledTimePicker = styled.div`
  position: relative;
  &::before {
    ${timePickerDim}
    z-index: 3;
    top: 0;
    background: linear-gradient(
      to bottom,
      ${rgba(ui.color_basic_solid.white, 0.6)} 0%,
      ${rgba(ui.color_basic_solid.white, 0.6)} 50%,
      ${rgba(ui.color_basic_solid.white, 0.4)} 51%,
      ${rgba(ui.color_basic_solid.white, 0.4)} 100%
    );
  }
  &::after {
    ${timePickerDim}
    bottom: 0;
    background: linear-gradient(
      to bottom,
      ${rgba(ui.color_basic_solid.white, 0.4)} 0%,
      ${rgba(ui.color_basic_solid.white, 0.4)} 50%,
      ${rgba(ui.color_basic_solid.white, 0.6)} 51%,
      ${rgba(ui.color_basic_solid.white, 0.6)} 100%
    );
  }
`;
export const StyledTimePickerContainer = styled.div`
  position: relative;
  display: flex;
  max-height: 234px;
  overflow: hidden;
  justify-content: space-between;
`;
export const StyledTimeLabel = styled.div`
  ${alignCenter};
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${ui.size("100%", "26px")};
  border-radius: 20px;
  background-color: ${ui.color_identity.tertiary_a};
`;
export const StyledTimePickerDiv = styled.div`
  min-width: 20px;
  text-align: center;
  ${ui.font_style.body_md.regular};
  color: ${ui.color_basic_solid.white};
`;
export const StyledTimePickerColon = styled.div`
  svg {
    ${alignCenter};
  }
`;
export const StyledTimePickerBox = styled.div`
  z-index: 2;
  position: relative;
  overflow: auto;
  text-align: center;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledTimePickerElement = styled.div`
  scroll-snap-align: center;
  width: 36px;
  padding: 3px 0;
  ${ui.font_style.body_md.regular};
  cursor: pointer;
`;
export const StyledWmpATimeTitleArea = styled.div`
  position: relative;
`;
export const StyledTimePickerButton = styled.div`
  text-align: center;
  .btn_red {
    display: inline-block;
    width: 70px;
    margin: 12px 0 8px;
  }
`;

export const StyledButtonRefresh = styled.button`
  ${calendarRefreshButton};
`;

export const StyledBlind = styled.span``;
export const StyledCalendarPickerWrap = styled.div`
  position: relative;
  &:focus-within,
  &.on {
    > .wmpAPickerWrap {
      border: 1px solid ${ui.color_basic_solid.gray_800};
    }
  }
`;
export const StyledCalendarWrap = styled.div`
  position: relative;
  display: inline-block;
  height: 36px;
  border: 1px solid ${ui.color_basic_solid.gray_300};
  border-radius: 4px;
  box-sizing: border-box;
  ~ .wmpApickerWrap {
    margin-left: 18px;
    &:after {
      content: "~";
      ${ui.absolute("8px", "", "", "-14px")};
      ${ui.font_style.body_sm.regular};
    }
  }
`;
export const StyledCalendarInput = styled.input<{ st: { width: string } }>`
  caret-color: transparent;
  ${(props) => calenderInput(props.st.width ? inputWSize[props.st.width] : inputWSize.time)}
`;
export const StyledCalendarPicker = styled.button`
  ${calenderButton};
`;
// Wheel
interface ScrollEndProps {
  isScrollEnd: boolean;
}

export const ScrollSelectContainer = styled.div`
  z-index: 2;
  position: relative;
  // width: 100%;
`;

export const ScrollSelectorArea = styled.div`
  position: absolute;
  width: 99%;
  z-index: -1;
`;

export const ScrollSelectList = styled.div<ScrollEndProps>`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  position: relative;
  perspective: 1000px;
  top: -8px;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .scroll-item {
    &:hover {
      ${(props: ScrollEndProps) =>
        !props.isScrollEnd &&
        css`
          background-color: ${ui.color_basic_solid.gray_100};
          border-radius: 20px;
          cursor: pointer;
        `}
    }
  }
  .selected-time {
    transition: all 0.3s;
    color: ${ui.color_basic_solid.white};
    &:hover {
      background-color: inherit;
      cursor: default;
    }
  }
`;
