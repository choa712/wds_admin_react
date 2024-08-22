import styled, { css } from "styled-components";
import { ui } from "../../../assets/style";

interface WmpAContainerProps {
  st: {
    topBorder: string;
    bottomBorder: string;
  };
}
interface WmpAFormBoxProps {
  st: {
    vAlign: string;
    topPadding: string;
    bottomPadding: string;
  };
}
interface WmpAFormLabelProps {
  st: {
    labelWidth: string;
  };
}

const borderWidth = (position?: string, width?: string, color?: string) => {
  switch (width) {
    case "bold":
      return css`
        border-${position}:2px solid ${color};
      `;
    case "none":
      return false;
    case "regular":
    default:
      return css`
        border-${position}:1px solid ${color};
      `;
  }
};

const vAlign = (vAlign?: string) => {
  switch (vAlign) {
    case "top":
      return css`
        align-items: top;
        .wmpAFormLabel {
          .wmpAText {
            display: block;
            padding: 9px 0;
          }
        }
      `;
    default:
      return css`
        align-items: center;
      `;
  }
};

export const StyledWmpAFormBox = styled.div<WmpAFormBoxProps>`
  display: flex;
  padding-top: ${(props) => (props.st.topPadding ? ui.space[props.st.topPadding] : ui.space.space_6)};
  padding-bottom: ${(props) => (props.st.bottomPadding ? ui.space[props.st.bottomPadding] : ui.space.space_6)};
  gap: ${ui.space.space_12};
  ${(props) => vAlign(props.st.vAlign)};
`;

export const StyledWmpAFormHeader = styled.div`
  flex-shrink: 0;
`;

export const StyledWmpAFormLabel = styled.label<WmpAFormLabelProps>`
  display: inline-block;
  width: ${(props) => (props.st.labelWidth ? props.st.labelWidth : "112px")};
  svg {
    display: inline-block;
    margin-left: ${ui.space.space_6};
    vertical-align: middle;
  }
`;

export const StyledWmpAFormBody = styled.div`
  width: 100%;
`;

export const StyledWmpAContainer = styled.div<WmpAContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${ui.color_basic_solid.white};
  .container_wrap {
    ${(props) => props.st.topBorder && borderWidth("top", props.st.topBorder, ui.color_basic_solid.black)};
    ${(props) => props.st.bottomBorder && borderWidth("bottom", props.st.bottomBorder, ui.color_basic_solid.gray_300)};
    ${(props) =>
      (props.st.topBorder !== "none" || props.st.bottomBorder !== "none") &&
      css`
        padding: ${ui.space.space_16} ${ui.space.space_12};
      `};
  }
`;

export const StyledWmpAForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${ui.color_basic_solid.white}; ;
`;

export const StyledFormBtn = styled.div`
  margin-top: 25px;
  text-align: center;
  button {
    display: inline-block;
    width: auto;
    min-width: 112px;
    margin: 0 5px;
  }
`;
