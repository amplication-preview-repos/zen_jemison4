/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Creditor as PrismaCreditor,
  Debt as PrismaDebt,
} from "@prisma/client";

export class CreditorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CreditorCountArgs, "select">): Promise<number> {
    return this.prisma.creditor.count(args);
  }

  async creditors(
    args: Prisma.CreditorFindManyArgs
  ): Promise<PrismaCreditor[]> {
    return this.prisma.creditor.findMany(args);
  }
  async creditor(
    args: Prisma.CreditorFindUniqueArgs
  ): Promise<PrismaCreditor | null> {
    return this.prisma.creditor.findUnique(args);
  }
  async createCreditor(
    args: Prisma.CreditorCreateArgs
  ): Promise<PrismaCreditor> {
    return this.prisma.creditor.create(args);
  }
  async updateCreditor(
    args: Prisma.CreditorUpdateArgs
  ): Promise<PrismaCreditor> {
    return this.prisma.creditor.update(args);
  }
  async deleteCreditor(
    args: Prisma.CreditorDeleteArgs
  ): Promise<PrismaCreditor> {
    return this.prisma.creditor.delete(args);
  }

  async findDebts(
    parentId: string,
    args: Prisma.DebtFindManyArgs
  ): Promise<PrismaDebt[]> {
    return this.prisma.creditor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .debts(args);
  }
}
