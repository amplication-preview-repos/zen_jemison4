import { Payment } from "../payment/Payment";
import { User } from "../user/User";
import { Creditor } from "../creditor/Creditor";

export type Debt = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  dueDate: Date | null;
  status?: "Option1" | null;
  payments?: Array<Payment>;
  user?: User | null;
  creditor?: Creditor | null;
};
