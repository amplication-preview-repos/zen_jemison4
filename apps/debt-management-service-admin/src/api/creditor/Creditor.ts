import { Debt } from "../debt/Debt";

export type Creditor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  contactEmail: string | null;
  phoneNumber: string | null;
  debts?: Array<Debt>;
};
