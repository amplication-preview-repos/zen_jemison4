import { Debt } from "../debt/Debt";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  debt?: Debt | null;
};
