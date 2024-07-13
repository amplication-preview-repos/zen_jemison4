import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEBT_TITLE_FIELD } from "./DebtTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CREDITOR_TITLE_FIELD } from "../creditor/CreditorTitle";

export const DebtShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="status" source="status" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="creditor"
          source="creditor.id"
          reference="Creditor"
        >
          <TextField source={CREDITOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Payment"
          target="debtId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="paymentDate" source="paymentDate" />
            <ReferenceField label="debt" source="debt.id" reference="Debt">
              <TextField source={DEBT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
