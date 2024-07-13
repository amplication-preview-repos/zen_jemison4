import { Creditor as TCreditor } from "../api/creditor/Creditor";

export const CREDITOR_TITLE_FIELD = "name";

export const CreditorTitle = (record: TCreditor): string => {
  return record.name?.toString() || String(record.id);
};
