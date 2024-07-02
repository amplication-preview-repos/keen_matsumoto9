import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  amount?: SortOrder;
  closeDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  stage?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
