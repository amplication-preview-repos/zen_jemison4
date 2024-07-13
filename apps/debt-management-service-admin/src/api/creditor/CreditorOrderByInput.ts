import { SortOrder } from "../../util/SortOrder";

export type CreditorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  contactEmail?: SortOrder;
  phoneNumber?: SortOrder;
};
