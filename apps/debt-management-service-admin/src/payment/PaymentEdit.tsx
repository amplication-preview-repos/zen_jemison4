import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DebtTitle } from "../debt/DebtTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <ReferenceInput source="debt.id" reference="Debt" label="debt">
          <SelectInput optionText={DebtTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
