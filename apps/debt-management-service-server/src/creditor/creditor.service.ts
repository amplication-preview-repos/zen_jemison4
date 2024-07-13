import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditorServiceBase } from "./base/creditor.service.base";

@Injectable()
export class CreditorService extends CreditorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
