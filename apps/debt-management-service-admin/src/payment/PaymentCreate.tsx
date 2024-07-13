import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DebtTitle } from "../debt/DebtTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <ReferenceInput source="debt.id" reference="Debt" label="debt">
          <SelectInput optionText={DebtTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
