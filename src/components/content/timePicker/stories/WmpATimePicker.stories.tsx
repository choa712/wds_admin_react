import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WmpATimePicker from "../WmpATimePicker";
import { ComponentBorder } from "../../../../stories/components/ComponentBorder";

export default {
  title: "Content/WmpATimePicker/Component",
  component: WmpATimePicker,
  argTypes: {},
} as ComponentMeta<typeof WmpATimePicker>;

export const WmpATimePicker_: ComponentStory<typeof WmpATimePicker> = (args) => {
  const [value, setValue] = useState("00:00");

  useEffect(() => {
    if (args.value) setValue(args.value);
  }, [args.value]);

  return (
    <>
      {value}
      <ComponentBorder className="wmpATimePickerArea">
        <div style={{ height: "400px" }}>
          <WmpATimePicker {...args} onChange={(t) => setValue(t)} value={value} />
        </div>
      </ComponentBorder>
    </>
  );
};

WmpATimePicker_.args = {
  isCalendar: false,
  value: "10:30",
  onSubmit: () => console.log("onSubmit"),
  onReset: () => console.log("onReset"),
  onChange: (t) => console.log(t),
};
