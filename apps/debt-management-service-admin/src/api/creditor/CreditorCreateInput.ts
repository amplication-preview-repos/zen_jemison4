import { DebtCreateNestedManyWithoutCreditorsInput } from "./DebtCreateNestedManyWithoutCreditorsInput";

export type CreditorCreateInput = {
  name?: string | null;
  contactEmail?: string | null;
  phoneNumber?: string | null;
  debts?: DebtCreateNestedManyWithoutCreditorsInput;
};
