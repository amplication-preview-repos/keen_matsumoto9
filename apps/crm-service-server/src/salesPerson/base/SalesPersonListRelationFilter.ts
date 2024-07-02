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
import { SalesPersonWhereInput } from "./SalesPersonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalesPersonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalesPersonWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesPersonWhereInput)
  @IsOptional()
  @Field(() => SalesPersonWhereInput, {
    nullable: true,
  })
  every?: SalesPersonWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesPersonWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesPersonWhereInput)
  @IsOptional()
  @Field(() => SalesPersonWhereInput, {
    nullable: true,
  })
  some?: SalesPersonWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesPersonWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesPersonWhereInput)
  @IsOptional()
  @Field(() => SalesPersonWhereInput, {
    nullable: true,
  })
  none?: SalesPersonWhereInput;
}
export { SalesPersonListRelationFilter as SalesPersonListRelationFilter };
