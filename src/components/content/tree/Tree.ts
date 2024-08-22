import styled from "styled-components";
import { ui } from "../../../assets/style";

export const StyledWmpATree = styled.div``;
export const StyledWmpATreeHeader = styled.div``;
export const StyledWmpATreeBody = styled.div``;
export const StyledWmpATreeWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px ${ui.space.space_10} 14px ${ui.space.space_8};
  &:hover {
    background-color: ${ui.color_basic_solid.gray_50};
    .btn_tree_area {
      display: block;
    }
  }
`;
export const StyledWmpATreeBtnToggle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  ${ui.size("20px")};
  margin-right: ${ui.space.space_8};
  border: 1px solid ${ui.color_basic_solid.transparent};
  transform: translateY(-50%);
  box-sizing: border-box;
  svg {
    margin: 0 auto;
  }
  &.isOpen {
    svg {
      transform: rotate(90deg);
    }
  }
  &:hover {
    border: 1px solid ${ui.color_basic_solid.gray_600};
    border-radius: 2px;
  }
`;
export const StyledWmpATreeTitleArea = styled.div``;
export const StyledWmpATreeButtonArea = styled.div`
  display: none;
  ${ui.absolute("50%", "10px", "", "")};
  transform: translateY(-50%);
  .btn_tree {
    padding: ${ui.space.space_none} ${ui.space.space_6};
    ${ui.font_style.body_sm.regular};
    color: ${ui.color_basic_solid.gray_700};
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const StyledWmpATreeDepth = styled.div`
  position: relative;
  border-bottom: 1px solid ${ui.color_basic_solid.gray_300};
  .wmpATreeWrap {
    padding: 14px ${ui.space.space_16} 14px 36px;
    .btn_tree_toggle {
      left: 8px;
    }
    .title_tree_area {
      margin-right: 180px;
      .wmpAText {
        font-weight: ${ui.font_weight.bold};
      }
    }
    + .wmpATreeContent {
      .wmpATreeDepth {
        border-bottom: 0 none;
      }
      .wmpATreeWrap {
        padding: ${ui.space.space_8} ${ui.space.space_16} ${ui.space.space_8} 64px;
        .btn_tree_toggle {
          left: 36px;
        }
        .title_tree_area {
          margin-right: 198px;
        }
        .wmpAText {
          font-weight: ${ui.font_weight.regular};
        }
        + .wmpATreeContent {
          .wmpATreeDepth {
            border-bottom: 0 none;
          }
          .wmpATreeWrap {
            padding: ${ui.space.space_8} ${ui.space.space_16} ${ui.space.space_8} 92px;
            border-bottom: 0 none;
            .title_tree_area {
              margin-right: 82px;
            }
            .wmpAText {
              font-weight: ${ui.font_weight.regular};
            }
          }
        }
      }
    }
  }
`;
export const StyledWmpATreeContent = styled.div``;
