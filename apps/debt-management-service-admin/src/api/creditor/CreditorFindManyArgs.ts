import { CreditorWhereInput } from "./CreditorWhereInput";
import { CreditorOrderByInput } from "./CreditorOrderByInput";

export type CreditorFindManyArgs = {
  where?: CreditorWhereInput;
  orderBy?: Array<CreditorOrderByInput>;
  skip?: number;
  take?: number;
};
