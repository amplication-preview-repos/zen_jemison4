import { SortOrder } from "../../util/SortOrder";

export type DebtOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  dueDate?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  creditorId?: SortOrder;
};
