import { JsonValue } from "type-fest";
import { Debt } from "../debt/Debt";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  debts?: Array<Debt>;
};
