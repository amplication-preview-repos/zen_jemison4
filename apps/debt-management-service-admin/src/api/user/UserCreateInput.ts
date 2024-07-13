import { InputJsonValue } from "../../types";
import { DebtCreateNestedManyWithoutUsersInput } from "./DebtCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  debts?: DebtCreateNestedManyWithoutUsersInput;
};
