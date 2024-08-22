import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import React, { useState } from "react";
import Example from "../../../../stories/components/Example";
import WmpAForm from "../WmpAForm";
import { WmpARadio, WmpACheckbox } from "../../../content";
import { WmpAInputText } from "../../../basic";
import WmpAFormWrap from "../../formWrap/WmpAFormWrap";
import ReactHookFormExample from "../../../../stories/examples/ReactHookFormExample";

export default {
  title: "Layout/WmpAForm/Examples",
  component: Example,
  parameters: {
    previewTabs: {
      docs: { hidden: true },
    },
    options: {
      showPanel: false,
    },
  },
} as ComponentMeta<typeof Example>;

export const Basic: ComponentStory<typeof Example> = () => {
  const [filter, setFilter] = useState<{
    targetName: string;
    order: boolean;
    extract: boolean;
    size: number;
    page: number;
    extractType: string;
  }>({
    targetName: "",
    order: false,
    extract: false,
    size: 0,
    page: 0,
    extractType: "",
  });

  const PAGE_MOVE_TASK = "페이지 이동 작업";
  const SPEC_EXTRACT_TASK = "상세 추출 작업";

  const NO_PROCESS_TASKS = [
    { name: PAGE_MOVE_TASK, type: "order" },
    { name: SPEC_EXTRACT_TASK, type: "extract" },
  ];

  const handleNoTaskChange = (text: string) => {
    setFilter({
      ...filter,
      [text]: !filter[text],
    });
  };

  const handleChange = (text: string) => {
    setFilter({
      ...filter,
      targetName: text,
    });
  };

  return (
    <Example
      code={
        <WmpAForm topBorder="none" bottomBorder="none">
          <WmpAForm.Box title={<WmpAForm.Label>타겟명</WmpAForm.Label>}>
            <WmpAInputText
              placeholder="타겟명을 입력해주세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
              value={filter.targetName}
            />
          </WmpAForm.Box>
          <WmpAForm.Box title={<WmpAForm.Label>미처리 작업</WmpAForm.Label>}>
            <WmpAFormWrap>
              {NO_PROCESS_TASKS.map((el, i) => {
                return (
                  <WmpACheckbox
                    onChange={() => handleNoTaskChange(el.type)}
                    checked={filter[el.type]}
                    inputId={el.type}
                    key={i}
                  >
                    {el.name}
                  </WmpACheckbox>
                );
              })}
            </WmpAFormWrap>
          </WmpAForm.Box>
          <WmpAForm.Box title={<WmpAForm.Label>추출타입</WmpAForm.Label>}>
            <WmpAFormWrap>
              {[{ name: "상품" }, { name: "리뷰" }].map((el, i) => {
                return (
                  <WmpARadio
                    onChange={() => {
                      console.log("el.name", el.name);
                      setFilter({ ...filter, extractType: el.name });
                    }}
                    inputId={`input_${i}`}
                    checked={filter.extractType === el.name}
                    key={i}
                  >
                    {el.name}
                  </WmpARadio>
                );
              })}
            </WmpAFormWrap>
          </WmpAForm.Box>
        </WmpAForm>
      }
      codeString={`
<WmpAForm topBorder="" bottomBorder="">
    <WmpAForm.Box title={<WmpAForm.Label>타겟명</WmpAForm.Label>}>
        <WmpAInputText
            placeholder="타겟명을 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
            value={filter.targetName}
        />
    </WmpAForm.Box>
    <WmpAForm.Box title={<WmpAForm.Label>미처리 작업</WmpAForm.Label>}>
        <WmpAFormWrap>
            {NO_PROCESS_TASKS.map((el, i) => {
                return (
                    <WmpACheckbox
                        onChange={() => handleNoTaskChange(el.type)}
                        checked={filter[el.type]}
                        inputId={el.type}
                        key={i}
                    >
                        {el.name}
                    </WmpACheckbox>
                );
            })}
        </WmpAFormWrap>
    </WmpAForm.Box>
    <WmpAForm.Box title={<WmpAForm.Label>추출타입</WmpAForm.Label>}>
        <WmpAFormWrap>
            {[{ name: "상품" }, { name: "리뷰" }].map((el, i) => {
                return (
                    <WmpARadio
                        onChange={() => {
                            console.log("el.name", el.name);
                            setFilter({ ...filter, extractType: el.name });
                        }}
                        inputId={radio_i}
                        checked={filter.extractType === el.name}
                        key={i}
                    >
                        {el.name}
                    </WmpARadio>
                );
            })}
        </WmpAFormWrap>
    </WmpAForm.Box>
</WmpAForm>
      `}
    />
  );
};

export const ReactHookFormExample_: ComponentStory<typeof Example> = () => {
  return <ReactHookFormExample />;
};
