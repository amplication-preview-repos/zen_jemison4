import { PaymentCreateNestedManyWithoutDebtsInput } from "./PaymentCreateNestedManyWithoutDebtsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CreditorWhereUniqueInput } from "../creditor/CreditorWhereUniqueInput";

export type DebtCreateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  payments?: PaymentCreateNestedManyWithoutDebtsInput;
  user?: UserWhereUniqueInput | null;
  creditor?: CreditorWhereUniqueInput | null;
};
