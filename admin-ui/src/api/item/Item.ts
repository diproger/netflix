import { Order } from "../order/Order";

export type Item = {
  alternative: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  order?: Order | null;
  updatedAt: Date;
};
