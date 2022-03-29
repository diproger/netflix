import { ItemUpdateManyWithoutOrdersInput } from "./ItemUpdateManyWithoutOrdersInput";
import { OrderUpdateManyWithoutOrdersInput } from "./OrderUpdateManyWithoutOrdersInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";

export type OrderUpdateInput = {
  items?: ItemUpdateManyWithoutOrdersInput;
  orders?: OrderUpdateManyWithoutOrdersInput;
  owner?: OrderWhereUniqueInput | null;
  price?: number | null;
  status?: "Accepted" | "InProrgres" | "Done" | null;
};
