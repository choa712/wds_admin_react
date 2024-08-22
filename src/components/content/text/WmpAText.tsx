import React from "react";
import { getWdsKey, WMPA_TEXT_COMP_NAME } from "../../../constants/constants";
import "../../../index.css";
import WmpABadge from "../badge/WmpABadge";
import { StyledWmpATextP, StyledWmpATextSpan } from "./Text";
import { WmpATextProps } from "../../../types/contentType";

/**
 * ## [Storybook](https://wds-dev.wemakeprice.work/admin/index.html?path=/story/content-wmpatext-component--wmp-a-text)
 *
 * ## Props
 *
 * ---------------------
 *
 * | props | value | description |
 * | :--- | :--- | :--- |
 * | tag(string) | span, p (default) | 텍스트 tag의 종류 |
 * | fontStyle(string) | display_lg(36px), display_md(32px), display_sm(24px), header_lg(20px), header_md(19px), header_sm(18px), body_lg(16px), body_md(14px), body_sm(13px), caption_lg(12px), caption_sm(11px) (default) | 텍스트 크기 |
 * | weight(string) | regular(400) (default), bold(700) | 텍스트 굵기 |
 * | color(string) | white, gray_50, gray_100, gray_200, gray_300, gray_400, gray_500, gray_700, gray_800, gray_900, black, blue_400, bluegray_600, bluegray_700, bluegray_800, red_500, blue_500, blue_700, red_100, yellow_500, yellow_700 | 텍스트 색깔 |
 * | decoration(string) | underline, breakline | 텍스트 데코레이션 |
 * | align(string) | left, center, right | 텍스트 정렬 |
 * | className(string) | WmpAText | 텍스트 HTML className |
 * | required(boolean) | true(default), false | 텍스트 우측 상단에 빨간색 필수 표시 |
 * | bulletLeft(string) | null, left (default) | 텍스트 빨간색 필수 표시 위치 |
 * | ellipsis(string) | 1, 2, 3, ... | 텍스트 줄(line) 수(tag === 'p' 일 경우 적용됨) |
 * | tooltip(ReactNode) | <WmpAToolTip /> | 툴팁 컴포넌트 |
 * | ...rest |  | span 혹은 p의 기본 attributes |
 */
function WmpAText({
  children,
  tooltip,
  tag,
  weight,
  color,
  fontStyle,
  decoration,
  align,
  className,
  ellipsis = "",
  required,
  bulletLeft,
  style,
  ...rest
}: WmpATextProps) {
  if (tag === "span") {
    return (
      <StyledWmpATextSpan
        data-wds-key={getWdsKey(WMPA_TEXT_COMP_NAME, true)}
        data-testid="wmpa-text"
        required={true}
        st={{
          weight: weight || (fontStyle && "regular"),
          color,
          fontStyle,
          decoration,
          align,
          ellipsis,
          required,
        }}
        style={style}
        className={`wmpAText ${bulletLeft ? "left" : ""} ${className ? className : ""}`}
        {...rest}
      >
        {children}
        {required ? <WmpABadge name="point" /> : null}
        {tooltip}
      </StyledWmpATextSpan>
    );
  }

  return (
    <StyledWmpATextP
      {...rest}
      data-wds-key={getWdsKey(WMPA_TEXT_COMP_NAME, true)}
      data-testid="wmpa-text"
      required={true}
      st={{
        weight: weight || (fontStyle && "regular"),
        color,
        fontStyle,
        decoration,
        align,
        ellipsis,
        required,
      }}
      style={style}
      className={`wmpAText ${bulletLeft ? "left" : ""} ${className ? className : ""}`}
    >
      {children}
      {required ? <WmpABadge name="point" /> : null}
      {tooltip}
    </StyledWmpATextP>
  );
}
export default WmpAText;
