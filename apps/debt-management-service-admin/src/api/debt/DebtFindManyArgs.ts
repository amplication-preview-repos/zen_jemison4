import { DebtWhereInput } from "./DebtWhereInput";
import { DebtOrderByInput } from "./DebtOrderByInput";

export type DebtFindManyArgs = {
  where?: DebtWhereInput;
  orderBy?: Array<DebtOrderByInput>;
  skip?: number;
  take?: number;
};
