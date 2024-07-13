import { Debt as TDebt } from "../api/debt/Debt";

export const DEBT_TITLE_FIELD = "id";

export const DebtTitle = (record: TDebt): string => {
  return record.id?.toString() || String(record.id);
};
