import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";
import { OrderCreateNestedManyWithoutOrdersInput } from "./OrderCreateNestedManyWithoutOrdersInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";

export type OrderCreateInput = {
  items?: ItemCreateNestedManyWithoutOrdersInput;
  orders?: OrderCreateNestedManyWithoutOrdersInput;
  owner?: OrderWhereUniqueInput | null;
  price?: number | null;
  status?: "Accepted" | "InProrgres" | "Done" | null;
};
