import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SalesPersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="department" source="department" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <DateTimeInput label="hireDate" source="hireDate" />
        <TextInput label="lastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
