import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DebtService } from "./debt.service";
import { DebtControllerBase } from "./base/debt.controller.base";

@swagger.ApiTags("debts")
@common.Controller("debts")
export class DebtController extends DebtControllerBase {
  constructor(protected readonly service: DebtService) {
    super(service);
  }
}
