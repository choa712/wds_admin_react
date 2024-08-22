import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WmpAToolTip from "../WmpAToolTip";

const ALIGN = ["left", "right", "center", "", undefined];
const TOOLTIP_TITLE = ["left", "right", "center", "", undefined];
const CHILDREN = [
  <>
    <WmpAToolTip.List>상품명 또는 해당 제품의 모델명(모델번호)을 입력해주세요.</WmpAToolTip.List>
    <WmpAToolTip.List>모델명(모델번호)로 검색하는 경우 더욱 정확한 검색결과를 얻을 수 있습니다.</WmpAToolTip.List>
  </>,
  "모델명(모델번호)로 검색하는 경우 더욱 정확한 검색결과를 얻을 수 있습니다.",
  "",
  undefined,
];

describe("WmpARadio 렌더링", () => {
  ALIGN.forEach((prop) => {
    it(`align: ${prop}`, () => {
      render(<WmpAToolTip align={prop} />);
      expect(screen.getByTestId("wmpa-tooltip")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  TOOLTIP_TITLE.forEach((prop) => {
    it(`title: ${prop}`, () => {
      render(<WmpAToolTip title={prop} />);
      expect(screen.getByTestId("wmpa-tooltip")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  CHILDREN.forEach((prop) => {
    it(`children: ${prop}`, () => {
      render(<WmpAToolTip>{prop}</WmpAToolTip>);
      expect(screen.getByTestId("wmpa-tooltip")).toBeTruthy();
    });
  });
});
