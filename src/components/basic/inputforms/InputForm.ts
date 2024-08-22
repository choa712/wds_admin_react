import styled, { css } from "styled-components";
import { ui } from "../../../assets/style";

interface StyledInputProps {
  st: {
    textType: string;
    areatextType: string;
    hSize: string;
    wSize: string;
    align: string;
    unit: string;
    helpercolor: string;
  };
}

const inputWSize = {
  compact: "70px",
  sx: "100px",
  sm: "150px",
  md: "200px",
  lg: "260px",
  xl: "350px",
  xxl: "600px",
  fill: "100%",
};

//textarea 텍스트 위치
const infoTextareaType = (areatextType: string) => {
  switch (areatextType) {
    case "right": //textarea text 우측
      return css`
        align-items: flex-end;
      `;
    case "down": //textarea text 아래로
      return css`
        flex-direction: column;
        align-items: flex-end;
      `;
    default:
      return null;
  }
};

//input 높이
const inputHSize = (hSize: string) => {
  switch (hSize) {
    case "text_sm":
      return css`
        ${ui.font_style.caption_lg.regular};
        height: 30px;
      `;
    case "text_lg":
      return css`
        ${ui.font_style.body_md.regular};
        height: 50px;
      `;
    default: //text_md
      return css`
        ${ui.font_style.body_sm.regular};
        height: 36px;
      `;
  }
};

const wmpInput = () => {
  return css`
    background: ${ui.color_basic_solid.white};
    color: ${ui.color_basic_solid.gray_900};
    border-radius: ${ui.space.space_4};
    border: 1px solid ${ui.color_basic_solid.gray_300};
    appearance: none;
    &::placeholder {
      color: ${ui.color_basic_solid.gray_600};
    }
    &:disabled,
    &:read-only {
      color: ${ui.color_basic_solid.gray_700};
    }
    &:disabled {
      background: ${ui.color_basic_solid.gray_50};
    }
    &:focus {
      border: 1px solid ${ui.color_basic_solid.gray_800};
    }
  `;
};

export const StyledInputWrap = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  gap: ${ui.space.space_8};
  // 텍스트 아래로
  ${(props) =>
    props.st.textType === "downText" &&
    css`
      flex-direction: column;
    `};
  ${(props) =>
    props.st.unit &&
    css`
      input {
        padding-right: 28px;
      }
    `};
`;

export const StyledInputype = styled.div<StyledInputProps>`
  position: relative;
  width: ${(props) => inputWSize[props.st.wSize] || inputWSize.fill};
`;

export const StyledTextareaWrap = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  gap: ${ui.space.space_8};
  ${(props) => infoTextareaType(props.st.areatextType)};
  span {
    color: ${ui.color_basic_solid.gray_700};
  }
`;

export const StyleInfoText = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${ui.space.space_4};
  &.err span {
    color: ${ui.color_basic_solid.red_500};
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${wmpInput};
  ${(props) => inputHSize(props.st.hSize)};
  width: inherit;
  text-align: ${(props) => ui.font_align[props.st.align || "left"]};
  padding: 0 12px;
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    appearance: none;
  }
`;

export const StyledTextArea = styled.textarea<StyledInputProps>`
  ${wmpInput};
  ${ui.font_style.body_sm.regular};
  height: 100px;
  width: ${inputWSize.fill};
  padding: 10px 12px;
`;

export const StyledInputSpan = styled.span<StyledInputProps>`
  position: relative;
  display: flex;
  ${ui.font_style.caption_lg.regular};
  color: ${(props) => ui.color_basic_solid[props.st.helpercolor || "gray_900"]};
  em {
    color: ${ui.color_basic_solid.gray_900};
  }
`;

export const StyledunitSpan = styled.span<StyledInputProps>`
  ${ui.absolute("50%", "12px", "", "")};
  width: 13px;
  ${ui.font_style.body_sm.regular};
  color: ${ui.color_basic_solid.gray_800};
  transform: translateY(-50%);
`;
