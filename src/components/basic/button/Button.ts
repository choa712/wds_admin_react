import styled, { css } from "styled-components";
import { rgba } from "polished";
import { ui } from "../../../assets/style";

export interface BtnColorProps {
  soft: string[];
  red: string[];
  softred: string[];
  blue: string[];
  softblue: string[];
}

interface ButtonProps {
  st: {
    size: string;
    color: string;
    fill: string;
    round: string;
    opacity: string;
    iconLeft: string;
    width: string;
    graphicIcon?: Boolean;
  };
}

export const btn_height = {
  xl: "60",
  lg: "50",
  md: "36",
  sm: "30",
};

const BtnSize = (size: string) => {
  switch (size) {
    case "xl":
      return css`
        padding: 0 ${ui.space.space_24};
        ${ui.font_style.header_sm.bold};
        svg {
          ${ui.size("24px")};
          margin-right: 8px;
        }
      `;
    case "lg":
      return css`
        padding: 0 ${ui.space.space_24};
        ${ui.font_style.body_lg.bold};
        svg {
          ${ui.size("20px")};
          margin-right: 8px;
        }
      `;
    case "md":
      return css`
        padding: 0 ${ui.space.space_16};
        ${ui.font_style.body_sm.regular};
        svg {
          margin-right: 6px;
        }
      `;
    case "sm":
      return css`
        padding: 0 ${ui.space.space_10};
        ${ui.font_style.caption_lg.regular};
        svg {
          margin-right: 4px;
        }
      `;
    default:
      // lg
      return css`
        padding: 0 ${ui.space.space_24};
        ${ui.font_style.body_lg.bold};
        svg {
          ${ui.size("20px")};
          margin-right: 8px;
        }
      `;
  }
};

export const BtnColor: BtnColorProps = {
  soft: [ui.color_basic_solid.gray_500, ui.color_basic_solid.white, ui.color_basic_solid.gray_900],
  red: [ui.color_basic_solid.red_500, ui.color_basic_solid.red_500, ui.color_basic_solid.red_500],
  softred: ["", ui.color_basic_solid.red_500, ui.color_basic_solid.red_500],
  blue: [ui.color_basic_solid.blue_500, ui.color_basic_solid.blue_500, ui.color_basic_solid.blue_500],
  softblue: ["", ui.color_basic_solid.blue_500, ui.color_basic_solid.blue_500],
};

const BtnStyle = (size: string, type?: string, style?: string, graphicIcon?: Boolean) => {
  //BtnColor 0: border color, 1: background color, 2: outline type text color

  //soft인 경우 solid 타입 없음
  if (style === "soft") type = "outline";
  //softred or softblue인 경우 outline 타입 없음
  if (style === "softred" || style === "softblue") type = "solid";
  // 스타일이 없을 때 default
  if (!style) style = "soft";
  // xl, lg 일 때 softred, softblue 스타일 없음
  if (size === "xl" || size === "lg") {
    if (style === "softred") style = "red";
    else if (style === "softblue") style = "blue";
  }

  switch (type) {
    case "solid":
      return css`
        border: 1px solid transparent;
        //softred, softblue 일 때 배경색, 글자색 변경
        background: ${style === "softred" || style === "softblue" ? rgba(BtnColor[style][1], 0.1) : BtnColor[style][1]};
        color: ${style === "softred" || style === "softblue" ? BtnColor[style][2] : ui.color_basic_solid.white};
        ${!graphicIcon &&
        css`
          svg path {
            fill: ${style === "softred" || style === "softblue" ? BtnColor[style][2] : ui.color_basic_solid.white};
          }
        `}
      `;
    case "outline":
    default:
      return css`
        border: 1px solid ${BtnColor[style][0]};
        background: ${ui.color_basic_solid.white};
        color: ${BtnColor[style][2]};
        ${!graphicIcon &&
        css`
          svg path {
            fill: ${BtnColor[style][2]};
          }
        `}
      `;
  }
};

export const StyledWmpAButton = styled.button<ButtonProps>`
  display: block;
  width: ${(props) => props.st.width};
  height: ${(props) => btn_height[props.st.size]}px;
  ${(props) => BtnSize(props.st.size)};
  ${(props) => BtnStyle(props.st.size, props.st.fill, props.st.color, props.st.graphicIcon)};
  white-space: nowrap;
  border-radius: 2px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  &:disabled {
    border-color: ${ui.color_basic_solid.gray_50};
    background: ${ui.color_basic_solid.gray_200};
    color: ${ui.color_basic_solid.gray_400};
  }
  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px ${rgba(ui.color_basic_solid.black, 0.04)};
  }
`;
