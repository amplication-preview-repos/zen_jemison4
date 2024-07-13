import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DebtServiceBase } from "./base/debt.service.base";

@Injectable()
export class DebtService extends DebtServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
