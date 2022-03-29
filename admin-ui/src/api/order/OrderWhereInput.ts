import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { OrderListRelationFilter } from "./OrderListRelationFilter";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  items?: ItemListRelationFilter;
  orders?: OrderListRelationFilter;
  owner?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  status?: "Accepted" | "InProrgres" | "Done";
};
