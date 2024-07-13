import { PaymentUpdateManyWithoutDebtsInput } from "./PaymentUpdateManyWithoutDebtsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CreditorWhereUniqueInput } from "../creditor/CreditorWhereUniqueInput";

export type DebtUpdateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  payments?: PaymentUpdateManyWithoutDebtsInput;
  user?: UserWhereUniqueInput | null;
  creditor?: CreditorWhereUniqueInput | null;
};
