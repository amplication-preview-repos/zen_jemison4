import * as graphql from "@nestjs/graphql";
import { CreditorResolverBase } from "./base/creditor.resolver.base";
import { Creditor } from "./base/Creditor";
import { CreditorService } from "./creditor.service";

@graphql.Resolver(() => Creditor)
export class CreditorResolver extends CreditorResolverBase {
  constructor(protected readonly service: CreditorService) {
    super(service);
  }
}
