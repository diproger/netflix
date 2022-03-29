import { ItemWhereInput } from "./ItemWhereInput";

export type ItemListRelationFilter = {
  every?: ItemWhereInput;
  some?: ItemWhereInput;
  none?: ItemWhereInput;
};
