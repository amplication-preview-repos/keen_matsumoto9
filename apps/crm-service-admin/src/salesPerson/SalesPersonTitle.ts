import { SalesPerson as TSalesPerson } from "../api/salesPerson/SalesPerson";

export const SALESPERSON_TITLE_FIELD = "firstName";

export const SalesPersonTitle = (record: TSalesPerson): string => {
  return record.firstName?.toString() || String(record.id);
};
