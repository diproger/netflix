import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";
import { OrderTitle } from "./OrderTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="item"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="order"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="order.id" reference="Order" label="owner">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "accepted", value: "Accepted" },
            { label: "in_prorgres", value: "InProrgres" },
            { label: "done", value: "Done" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
