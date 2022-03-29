import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ItemUpdateInput = {
  alternative?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
};
