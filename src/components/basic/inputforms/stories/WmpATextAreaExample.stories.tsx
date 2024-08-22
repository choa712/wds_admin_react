import ReactHookFormExample from "../../../../stories/examples/ReactHookFormExample";
import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Example from "../../../../stories/components/Example";

export default {
  title: "Basic/WmpATextArea/Examples",
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

export const ReactHookFormExample_: ComponentStory<typeof Example> = () => {
  return <ReactHookFormExample />;
};
