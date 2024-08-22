import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WmpAFold from "../WmpAFold";
import WmpAText from "../../text/WmpAText";

const WMPA_FOLD_DATA = [
  {
    hideText: (
      <div>
        <div>카탈로그 선택 시 카테고리, 상품명, 제조사, 브랜드 항목이 자동으로 입력됩니다.</div>
        <div>카탈로그 매칭이 완료되면 위메프 사이트 내에서 검색 시 노출이 더욱 많이 됩니다.</div>
      </div>
    ),
    title: "카탈로그 정보",
    children: (
      <>
        <WmpAText color="black" fontStyle="body_md" tag="p">
          카탈로그 컨텐츠 텍스트 영역
        </WmpAText>
      </>
    ),
    isOpen: false,
  },
  {
    hideText: (
      <div>
        <div>카탈로그 선택 시 카테고리, 상품명, 제조사, 브랜드 항목이 자동으로 입력됩니다. -1 </div>
      </div>
    ),
    title: "카탈로그 정보",
    children: (
      <>
        <WmpAText color="black" fontStyle="body_md" tag="p">
          카탈로그 컨텐츠 텍스트 영역
        </WmpAText>
      </>
    ),
    isOpen: true,
  },
  {
    hideText: "카탈로그 선택 시 카테고리, 상품명, 제조사, 브랜드 항목이 자동으로 입력됩니다. -test",
    title: "",
    children: "",
    isOpen: undefined,
  },
  {
    hideText: undefined,
    title: undefined,
    children: undefined,
    isOpen: undefined,
  },
];

describe("WmpAFold 렌더링", () => {
  WMPA_FOLD_DATA.forEach((prop) => {
    it(`WmpAFold props: ${prop}`, () => {
      render(<WmpAFold hideText={prop.hideText} title={prop.title} children={prop.children} isOpen={prop.isOpen} />);
      expect(screen.getByTestId("wmpa-fold")).toBeInTheDocument();
    });
  });

  it("--------------------", () => {});

  it("onClick 이벤트 테스트", () => {
    const onClick = jest.fn();
    render(<WmpAFold onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("onRemove 이벤트 테스트", () => {
    const onRemove = jest.fn();
    render(<WmpAFold size="sm" onRemove={onRemove} />);
    fireEvent.click(screen.getByTestId("wmpa-fold-remove-button"));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
