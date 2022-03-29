import { ItemWhereUniqueInput } from "./ItemWhereUniqueInput";
import { ItemUpdateInput } from "./ItemUpdateInput";

export type UpdateItemArgs = {
  where: ItemWhereUniqueInput;
  data: ItemUpdateInput;
};
