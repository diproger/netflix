import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ItemCreateInput = {
  alternative?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
};
