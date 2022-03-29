import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ItemWhereInput = {
  alternative?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
