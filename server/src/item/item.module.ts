import { Module } from "@nestjs/common";
import { ItemModuleBase } from "./base/item.module.base";
import { ItemService } from "./item.service";
import { ItemController } from "./item.controller";
import { ItemResolver } from "./item.resolver";

@Module({
  imports: [ItemModuleBase],
  controllers: [ItemController],
  providers: [ItemService, ItemResolver],
  exports: [ItemService],
})
export class ItemModule {}
