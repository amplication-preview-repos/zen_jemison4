import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CreditorWhereUniqueInput } from "../creditor/CreditorWhereUniqueInput";

export type DebtWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  status?: "Option1";
  payments?: PaymentListRelationFilter;
  user?: UserWhereUniqueInput;
  creditor?: CreditorWhereUniqueInput;
};
