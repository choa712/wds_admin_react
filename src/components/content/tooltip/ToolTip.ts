import styled, { css } from "styled-components";
import { ui } from "../../../assets/style";

interface WmpAToolTipProps {
  st: {
    align: string;
  };
}

const tooltipAlign = (align: string) => {
  switch (align) {
    case "center":
      return css`
        .tooltip_box {
          left: 50%;
          transform: translateX(-50%);
          svg {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `;
    case "right":
      return css`
        .tooltip_box {
          right: -22px;
          svg {
            right: 19px;
          }
        }
      `;
    case "left":
    default:
      return css`
        .tooltip_box {
          left: -18px;
          svg {
            left: 19px;
          }
        }
      `;
  }
};

export const StyledWmpAToolTip = styled.div<WmpAToolTipProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  font-size: 0;
  ${(props) => tooltipAlign(props.st.align)};
  &:hover {
    .tooltip_box {
      display: block;
    }
  }
`;
export const StyledWmpAButton = styled.button`
  margin-left: 6px;
`;
export const StyledWmpABox = styled.div`
  position: absolute;
  top: 100%;
  min-width: 345px;
  margin-top: 8px;
  margin-left: 6px;
  padding: ${ui.space.space_16};
  border: 1px solid ${ui.color_basic_solid.gray_600};
  background-color: ${ui.color_basic_solid.white};
  border-radius: 2px;
  text-align: left;
  z-index: 3;
  display: none;
  .tooltip_tit {
    margin-bottom: 10px;
    ${ui.font_style.caption_lg.bold};
    color: ${ui.color_basic_solid.blue_700};
  }
  .tooltip_con {
    position: relative;
    ${ui.font_style.caption_lg.regular};
    color: ${ui.color_basic_solid.black};
  }
  svg {
    position: absolute;
    top: -6px;
  }
  ul {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const StyledWmpAList = styled.li`
  position: relative;
  padding-left: ${ui.space.space_10};
  margin-bottom: 4px;
  ${ui.font_style.caption_lg.regular};
  color: ${ui.color_basic_solid.gray_800};
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: "-";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
`;
