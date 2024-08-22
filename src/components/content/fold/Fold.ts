import styled, { css } from "styled-components";
import { ui } from "../../../assets/style";

interface WmpAFoldProps {
  st: {
    size: string;
  };
}
const SizeMD = css`
  padding: ${ui.space.space_28} ${ui.space.space_32};
  background-color: ${ui.color_basic_solid.white};
  border: 1px solid ${ui.color_basic_solid.gray_400};
  .wmpAFoldBody {
    margin-top: ${ui.space.space_6};
  }
  .wmpATitle {
    padding-bottom: ${ui.space.space_none};
  }
  .title {
    min-width: 152px;
    ${ui.font_style.header_sm.bold};
  }
  .btnFoldToggle {
    position: absolute;
    top: 23px;
    right: 32px;
    display: block;
    ${ui.size("34px")};
    border: 1px solid ${ui.color_basic_solid.gray_300};
  }
`;
const size = (size?: string) => {
  switch (size) {
    case "md":
      return css`
        ${SizeMD}
      `;
    case "sm":
      return css`
        padding: ${ui.space.space_10};
        background-color: ${ui.color_basic_solid.gray_50};
        .wmpAFoldWrap {
          position: relative;
          padding: 0 ${ui.space.space_12};
          border: 1px solid ${ui.color_basic_solid.gray_300};
          background-color: ${ui.color_basic_solid.white};
          border-radius: 4px;
          .wmpATitle {
            padding: ${ui.space.space_16} ${ui.space.space_6} ${ui.space.space_16} ${ui.space.space_none};
          }
          .title {
            ${ui.font_style.body_md.bold};
          }
        }
        .btnFoldToggle {
          position: relative;
          display: inline-block;
          ${ui.size("24px")};
        }
        .btnFoldDelete {
          position: absolute;
          top: 16px;
          right: 12px;
          display: flex;
          align-items: center;
          padding: ${ui.space.space_4} ${ui.space.space_8};
          border-radius: 12px;
          font-size: ${ui.font_size.size_11};
          color: ${ui.color_basic_solid.gray_800};
          line-height: 1;
          svg {
            margin-right: ${ui.space.space_2};
            path {
              fill: ${ui.color_basic_solid.gray_700};
            }
          }
          &:hover {
            background-color: ${ui.color_basic_solid.gray_100};
          }
        }
        .foldContent {
          margin-bottom: ${ui.space.space_16};
        }
      `;
    default:
      return css`
        ${SizeMD}
      `;
  }
};

export const StyledWmpAFold = styled.div<WmpAFoldProps>`
  position: relative;
  border-radius: 4px;
  ${(props) => size(props.st.size)};
  .btnFoldToggle {
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
    }
    &.unfold {
      svg {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
`;
export const StyledWmpAFoldWrap = styled.div``;
export const StyledWmpAHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  .foldInfo {
    margin: ${ui.space.space_none} 42px ${ui.space.space_none} ${ui.space.space_16};
    ${ui.font_style.body_sm.regular};
    color: ${ui.color_basic_solid.blue_700};
  }
`;
export const StyledWmpABody = styled.div``;
