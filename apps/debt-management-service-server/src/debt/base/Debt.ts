/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDebtStatus } from "./EnumDebtStatus";
import { Payment } from "../../payment/base/Payment";
import { User } from "../../user/base/User";
import { Creditor } from "../../creditor/base/Creditor";

@ObjectType()
class Debt {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDebtStatus,
  })
  @IsEnum(EnumDebtStatus)
  @IsOptional()
  @Field(() => EnumDebtStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payments?: Array<Payment>;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => Creditor,
  })
  @ValidateNested()
  @Type(() => Creditor)
  @IsOptional()
  creditor?: Creditor | null;
}

export { Debt as Debt };