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
  Debt as PrismaDebt,
  Payment as PrismaPayment,
  User as PrismaUser,
  Creditor as PrismaCreditor,
} from "@prisma/client";

export class DebtServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DebtCountArgs, "select">): Promise<number> {
    return this.prisma.debt.count(args);
  }

  async debts(args: Prisma.DebtFindManyArgs): Promise<PrismaDebt[]> {
    return this.prisma.debt.findMany(args);
  }
  async debt(args: Prisma.DebtFindUniqueArgs): Promise<PrismaDebt | null> {
    return this.prisma.debt.findUnique(args);
  }
  async createDebt(args: Prisma.DebtCreateArgs): Promise<PrismaDebt> {
    return this.prisma.debt.create(args);
  }
  async updateDebt(args: Prisma.DebtUpdateArgs): Promise<PrismaDebt> {
    return this.prisma.debt.update(args);
  }
  async deleteDebt(args: Prisma.DebtDeleteArgs): Promise<PrismaDebt> {
    return this.prisma.debt.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.debt
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.debt
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getCreditor(parentId: string): Promise<PrismaCreditor | null> {
    return this.prisma.debt
      .findUnique({
        where: { id: parentId },
      })
      .creditor();
  }
}
