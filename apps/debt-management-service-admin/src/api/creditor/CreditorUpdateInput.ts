import { DebtUpdateManyWithoutCreditorsInput } from "./DebtUpdateManyWithoutCreditorsInput";

export type CreditorUpdateInput = {
  name?: string | null;
  contactEmail?: string | null;
  phoneNumber?: string | null;
  debts?: DebtUpdateManyWithoutCreditorsInput;
};
