import React, { forwardRef } from "react";
import "../../../index.css";
import SvgIcon from "../../../assets/svg/SvgIcon";
import { getWdsKey, WMPA_BUTTON_COMP_NAME } from "../../../constants/constants";
import { BtnColor, StyledWmpAButton } from "./Button";
import { WmpAButtonProps } from "../../../types/basicType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/basic-wmpabutton--default)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | children(string 혹은 ReactNode) || 버튼 텍스트 |
 * | size(string) | xl, lg(default), md, sm | 버튼 사이즈 |
 * | fill(string) | outline(default), solid | 버튼 색 채움 종류 |
 * | color(string) | soft(default), red, softred, blue, softblue | 버튼 색깔 종류 |
 * | type(string) | button(default), submit, reset | 버튼의 용도 |
 * | width(string) | default 100% | 버튼의 너비 |
 * | iconLeft(string) | icon_check, graphic_microsoft_excel_logo, none | 버튼 텍스트 왼쪽 아이콘 |
 * | graphicIcon(boolean) | true, false | 버튼 내 아이콘 그래픽일 때 true |
 * | disabled(boolean) | true, false(default) | 버튼 사용 여부 |
 *
 * ## Events
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | onClick(function) | () => { doSomething() } | 버튼 클릭 시 실행되는 함수 |
 */
const WmpAButton = forwardRef<HTMLButtonElement, WmpAButtonProps>(
  ({ children, size, fill, color, type, width, iconLeft, graphicIcon, disabled, onClick, style, ...rest }, ref) => {
    const colors = color && Object.keys(BtnColor).includes(color) ? color : "soft";
    return (
      <StyledWmpAButton
        data-testid="wmpa-button"
        data-wds-key={getWdsKey(WMPA_BUTTON_COMP_NAME, true)}
        onClick={onClick}
        type={type || "button"}
        style={style}
        className={"btn_" + colors}
        st={{
          size: size || "lg",
          fill: fill || "outline",
          color: colors,
          type: type || "button",
          iconLeft,
          width: width || "100%",
          graphicIcon,
        }}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {!!iconLeft ? (
          <span data-wds-key={getWdsKey(WMPA_BUTTON_COMP_NAME)} className="icLeft">
            <SvgIcon name={iconLeft} />
          </span>
        ) : null}
        <span data-wds-key={getWdsKey(WMPA_BUTTON_COMP_NAME)}>{children}</span>
      </StyledWmpAButton>
    );
  }
);

export default WmpAButton;
