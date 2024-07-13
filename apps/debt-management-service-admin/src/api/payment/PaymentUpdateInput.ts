import { DebtWhereUniqueInput } from "../debt/DebtWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  debt?: DebtWhereUniqueInput | null;
};
