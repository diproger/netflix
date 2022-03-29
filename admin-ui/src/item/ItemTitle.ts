import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "name";

export const ItemTitle = (record: TItem): string => {
  return record.name || record.id;
};
