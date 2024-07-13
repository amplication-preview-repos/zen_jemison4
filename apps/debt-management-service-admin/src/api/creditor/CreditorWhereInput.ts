import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DebtListRelationFilter } from "../debt/DebtListRelationFilter";

export type CreditorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  debts?: DebtListRelationFilter;
};
