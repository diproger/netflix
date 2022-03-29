import { Item } from "../item/Item";

export type Order = {
  createdAt: Date;
  id: string;
  items?: Array<Item>;
  orders?: Array<Order>;
  owner?: Order | null;
  price: number | null;
  status?: "Accepted" | "InProrgres" | "Done" | null;
  updatedAt: Date;
};
