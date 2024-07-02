import { SalesPersonWhereInput } from "./SalesPersonWhereInput";
import { SalesPersonOrderByInput } from "./SalesPersonOrderByInput";

export type SalesPersonFindManyArgs = {
  where?: SalesPersonWhereInput;
  orderBy?: Array<SalesPersonOrderByInput>;
  skip?: number;
  take?: number;
};
