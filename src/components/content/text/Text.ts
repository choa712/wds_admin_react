import styled, { css } from "styled-components";
import { ui } from "../../../assets/style";

interface StyleProps {
  size: string;
  weight: string;
  color: string;
  fontStyle: string;
  decoration: string;
  align: string;
  ellipsis: string;
  required: boolean;
}

interface TextProps {
  st: StyleProps;
}

const txtHeight = (font: string, ellipsis: string) => +(font.split("line-height: ")[1].match(/\d\w/) || 1) * +ellipsis;

const txt = (st: StyleProps) => {
  let font = st.fontStyle && st.weight && ui.font_style[st.fontStyle][st.weight];
  return css`
    align-items: center;
    ${font};
    // 폰트 사이즈 없는 경우에 fot weight
    ${!st.fontStyle &&
    st.weight &&
    css`
      font-weight: ${ui.font_weight[st.weight]};
    `}
    color: ${ui.color_basic_solid[st.color]};
    ${st.decoration &&
    css`
      text-decoration: ${ui.font_deco[st.decoration]};
    `}
    ${st.align &&
    css`
      text-align: ${ui.font_align[st.align]};
    `}
    ${st.ellipsis &&
    css`
      height: ${txtHeight(font, st.ellipsis)}px;
      ${ui.ellipsis(+st.ellipsis)};
    `}
    ${st.required &&
    css`
      position: relative;
      padding-right: 10px;
      &.left {
        padding-right: 0;
        padding-left: 10px;
        .point {
          left: 0;
        }
      }
      .point {
        top: 0;
        right: 0;
      }
    `}
  `;
};

export const StyledWmpATextP = styled.p<TextProps>`
  ${(props) => txt(props.st)};
`;

export const StyledWmpATextSpan = styled.span<TextProps>`
  display: inline-flex;
  ${(props) => txt(props.st)}
`;
