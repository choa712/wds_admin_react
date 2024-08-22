import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import WmpAButton from "../WmpAButton";

const SIZE = ["xl", "lg", "md", "sm", "nonono", "", undefined];
const FILL = ["outline", "solid", "nonono", "", undefined];
const COLOR = ["soft", "red", "softred", "blue", "softblue", "nonono", "", undefined];
const ICON_LEFT = ["icon_check", "nonono", "", undefined];
const DISABLED = [true, false, undefined];

describe("WmpAText 렌더링", () => {
  SIZE.forEach((prop) => {
    it(`size: ${prop}`, () => {
      render(<WmpAButton size={prop}>{prop}</WmpAButton>);
      expect(screen.getByTestId("wmpa-button")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  FILL.forEach((prop) => {
    it(`fill: ${prop}`, () => {
      render(<WmpAButton fill={prop}>{prop}</WmpAButton>);
      expect(screen.getByTestId("wmpa-button")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  COLOR.forEach((prop) => {
    it(`color: ${prop}`, () => {
      render(<WmpAButton color={prop as "red"}>{prop}</WmpAButton>);
      expect(screen.getByTestId("wmpa-button")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  it(`type: button`, () => {
    render(<WmpAButton type={"button"}>button</WmpAButton>);
    expect(screen.getByTestId("wmpa-button")).toBeTruthy();
  });

  it(`type: submit`, () => {
    render(<WmpAButton type={"submit"}>button</WmpAButton>);
    expect(screen.getByTestId("wmpa-button")).toBeTruthy();
  });

  it(`type: reset`, () => {
    render(<WmpAButton type={"reset"}>button</WmpAButton>);
    expect(screen.getByTestId("wmpa-button")).toBeTruthy();
  });

  it(`type: undefined`, () => {
    render(<WmpAButton>button</WmpAButton>);
    expect(screen.getByTestId("wmpa-button")).toBeTruthy();
  });

  it("--------------------", () => {});

  ICON_LEFT.forEach((prop) => {
    it(`color: ${prop}`, () => {
      render(<WmpAButton iconLeft={prop}>{prop}</WmpAButton>);
      expect(screen.getByTestId("wmpa-button")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  DISABLED.forEach((prop) => {
    it(`disabled: ${prop}`, () => {
      render(<WmpAButton disabled={prop}>{prop}</WmpAButton>);
      expect(screen.getByTestId("wmpa-button")).toBeTruthy();
    });
  });

  it("--------------------", () => {});

  it("onClick", () => {
    const onClick = jest.fn();
    render(<WmpAButton onClick={onClick}>버튼</WmpAButton>);
    fireEvent.click(screen.getByTestId("wmpa-button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
