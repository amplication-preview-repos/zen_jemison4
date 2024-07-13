import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditorService } from "./creditor.service";
import { CreditorControllerBase } from "./base/creditor.controller.base";

@swagger.ApiTags("creditors")
@common.Controller("creditors")
export class CreditorController extends CreditorControllerBase {
  constructor(protected readonly service: CreditorService) {
    super(service);
  }
}
