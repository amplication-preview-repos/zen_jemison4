import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DebtWhereUniqueInput } from "../debt/DebtWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  debt?: DebtWhereUniqueInput;
};
