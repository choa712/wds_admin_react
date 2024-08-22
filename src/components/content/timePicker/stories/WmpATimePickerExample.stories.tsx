import React, { useState } from "react";
import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Example from "../../../../stories/components/Example";
import WmpATimePicker from "../WmpATimePicker";
import ReactHookFormExample from "../../../../stories/examples/ReactHookFormExample";

export default {
  title: "Content/WmpATimePicker/Examples",
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

const RelativeDiv = styled.div`
  & .wmpATimePickerArea {
    position: relative;
    top: 2px !important;
  }
`;

export const Basic: ComponentStory<typeof Example> = () => {
  const [value, setValue] = useState("03:20");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Example
        code={
          <RelativeDiv>
            <WmpATimePicker
              isOpen={isOpen}
              onShow={(e) => setIsOpen(e)}
              onSubmit={() => setIsOpen(!isOpen)}
              onReset={() => setValue("00:00")}
              value={value}
              onChange={(t) => setValue(t)}
            />
          </RelativeDiv>
        }
        codeString={`
const [isOpen, setIsOpen] = useState(false);
const [hour, setHour] = useState("");
const [minute, setMinute] = useState("");

const [value, setValue] = useState("03:20");

<WmpATimePicker
  isOpen={isOpen}
  onShow={(e) => setIsOpen(e)}
  onSubmit={() => setIsOpen(!isOpen)}
  onReset={() => setValue("00:00")}
  value={value}
  onChange={(t) => setValue(t)}
/>
`}
      />
    </>
  );
};

export const ReactHookFormExample_: ComponentStory<typeof Example> = () => {
  return <ReactHookFormExample />;
};
