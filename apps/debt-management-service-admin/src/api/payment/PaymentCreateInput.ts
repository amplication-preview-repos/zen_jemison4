import { DebtWhereUniqueInput } from "../debt/DebtWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  debt?: DebtWhereUniqueInput | null;
};
