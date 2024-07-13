import { Module } from "@nestjs/common";
import { DebtModuleBase } from "./base/debt.module.base";
import { DebtService } from "./debt.service";
import { DebtController } from "./debt.controller";
import { DebtResolver } from "./debt.resolver";

@Module({
  imports: [DebtModuleBase],
  controllers: [DebtController],
  providers: [DebtService, DebtResolver],
  exports: [DebtService],
})
export class DebtModule {}
