import { InputJsonValue } from "../../types";
import { DebtUpdateManyWithoutUsersInput } from "./DebtUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  debts?: DebtUpdateManyWithoutUsersInput;
};
