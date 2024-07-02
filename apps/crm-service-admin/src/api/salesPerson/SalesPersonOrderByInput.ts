import { SortOrder } from "../../util/SortOrder";

export type SalesPersonOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  hireDate?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
