import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DealWhereInput = {
  amount?: FloatNullableFilter;
  closeDate?: DateTimeNullableFilter;
  id?: StringFilter;
  stage?: "Option1";
  title?: StringNullableFilter;
};
