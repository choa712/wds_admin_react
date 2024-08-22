import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Example from "../../../../stories/components/Example";
import WmpAInputText from "../WmpAInputText";
import WmpAForm from "../../../layout/form/WmpAForm";
import WmpAButton from "../../button/WmpAButton";

export default {
  title: "Basic/WmpAInputText/Examples",
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
  return (
    <Example
      code={
        <WmpAForm>
          <WmpAForm.Box title={<WmpAForm.Label>타이틀</WmpAForm.Label>}>
            <WmpAInputText width="md" height="text_sm" helpText="확인해주세요" isInputError={true} />
            <WmpAInputText width="compact" />
          </WmpAForm.Box>
        </WmpAForm>
      }
      codeString={`
<WmpAForm>
    <WmpAForm.Box
        title={
            <WmpAForm.Label>타이틀</WmpAForm.Label>
        }
    >
        <WmpAInputText width="md" height="text_sm" helpText="확인해주세요" isInputError={true} />
        <WmpAInputText width="compact" />
    </WmpAForm.Box>
</WmpAForm>
`}
    />
  );
};

export const ReactHookFormExample_: ComponentStory<typeof Example> = () => {
  const { handleSubmit, register, formState } = useForm();
  const [value, setValue] = useState({ email: "", username: "", password: "" });
  const onSubmit = (values) => {
    console.log("values", values);
    setValue(values);
  };

  console.log(register("email"));
  console.log("formState", formState);

  return (
    <Example
      code={
        <WmpAForm onSubmit={handleSubmit(onSubmit)}>
          <WmpAForm.Box title={<WmpAForm.Label>아이디</WmpAForm.Label>}>
            <WmpAInputText {...register("email")} helpText={formState.errors.email && formState.errors.email.message} />
          </WmpAForm.Box>
          <WmpAForm.Box title={<WmpAForm.Label>비밀번호</WmpAForm.Label>}>
            <WmpAInputText
              type="password"
              helpText={formState.errors.password && formState.errors.password.message}
              {...register("password")}
            />
          </WmpAForm.Box>
          submit email: {value.email}
          <br />
          submit password: {value.password}
          <WmpAButton type="submit">제출</WmpAButton>
        </WmpAForm>
      }
      codeString={`
import {
  WmpAButton,
  WmpAForm,
  WmpAFormBox,
  WmpAInputText,
} from "@wmp-sbd/wds-react-admin-dev";
import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { handleSubmit, register, formState } = useForm();
  const [value, setValue] = useState({ email: "", username: "", password: "" });
  const onSubmit = (values: any) => {
    setValue(values);
  };

  return (
    <WmpAForm onSubmit={handleSubmit(onSubmit)}>
      <WmpAFormBox title={<WmpAForm.Label>아이디</WmpAForm.Label>}>
        <WmpAInputText
          {...register("email")}
          helpText={formState.errors.email && formState.errors.email.message}
        />
      </WmpAFormBox>
      <WmpAFormBox title={<WmpAForm.Label>비밀번호</WmpAForm.Label>}>
        <WmpAInputText
          type="password"
          helpText={
            formState.errors.password && formState.errors.password.message
          }
          {...register("password")}
        />
      </WmpAFormBox>
      submit email: {value.email}
      <br />
      submit password: {value.password}
      <WmpAButton type="submit">제출</WmpAButton>
    </WmpAForm>
  );
};

export default App;

`}
    />
  );
};
