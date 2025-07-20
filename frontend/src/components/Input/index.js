import { Input, Label, Fieldset } from "./style.js";

export const InputField = function ({ ...params }) {
  const { id, label, empty, ...inputParams } = params;

  return (
    <>
      <Fieldset aria-disabled={empty} style={params.style}>
        <Input id={id} {...inputParams} />
        <Label htmlFor={id}>{label}</Label>
      </Fieldset>
    </>
  );
};
