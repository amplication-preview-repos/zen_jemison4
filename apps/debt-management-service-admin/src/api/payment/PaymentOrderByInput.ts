import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  paymentDate?: SortOrder;
  debtId?: SortOrder;
};
