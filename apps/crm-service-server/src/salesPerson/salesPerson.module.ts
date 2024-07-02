import { Module } from "@nestjs/common";
import { SalesPersonModuleBase } from "./base/salesPerson.module.base";
import { SalesPersonService } from "./salesPerson.service";
import { SalesPersonController } from "./salesPerson.controller";
import { SalesPersonResolver } from "./salesPerson.resolver";

@Module({
  imports: [SalesPersonModuleBase],
  controllers: [SalesPersonController],
  providers: [SalesPersonService, SalesPersonResolver],
  exports: [SalesPersonService],
})
export class SalesPersonModule {}
