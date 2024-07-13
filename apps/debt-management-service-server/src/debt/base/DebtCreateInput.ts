/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDebtStatus } from "./EnumDebtStatus";
import { PaymentCreateNestedManyWithoutDebtsInput } from "./PaymentCreateNestedManyWithoutDebtsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { CreditorWhereUniqueInput } from "../../creditor/base/CreditorWhereUniqueInput";

@InputType()
class DebtCreateInput {
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
  amount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

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
    type: () => PaymentCreateNestedManyWithoutDebtsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutDebtsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutDebtsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutDebtsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CreditorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreditorWhereUniqueInput)
  @IsOptional()
  @Field(() => CreditorWhereUniqueInput, {
    nullable: true,
  })
  creditor?: CreditorWhereUniqueInput | null;
}

export { DebtCreateInput as DebtCreateInput };
