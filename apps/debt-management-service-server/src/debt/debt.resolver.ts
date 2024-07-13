import * as graphql from "@nestjs/graphql";
import { DebtResolverBase } from "./base/debt.resolver.base";
import { Debt } from "./base/Debt";
import { DebtService } from "./debt.service";

@graphql.Resolver(() => Debt)
export class DebtResolver extends DebtResolverBase {
  constructor(protected readonly service: DebtService) {
    super(service);
  }
}
