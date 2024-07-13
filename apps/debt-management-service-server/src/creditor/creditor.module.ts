import { Module } from "@nestjs/common";
import { CreditorModuleBase } from "./base/creditor.module.base";
import { CreditorService } from "./creditor.service";
import { CreditorController } from "./creditor.controller";
import { CreditorResolver } from "./creditor.resolver";

@Module({
  imports: [CreditorModuleBase],
  controllers: [CreditorController],
  providers: [CreditorService, CreditorResolver],
  exports: [CreditorService],
})
export class CreditorModule {}
