import * as graphql from "@nestjs/graphql";
import { SalesPersonResolverBase } from "./base/salesPerson.resolver.base";
import { SalesPerson } from "./base/SalesPerson";
import { SalesPersonService } from "./salesPerson.service";

@graphql.Resolver(() => SalesPerson)
export class SalesPersonResolver extends SalesPersonResolverBase {
  constructor(protected readonly service: SalesPersonService) {
    super(service);
  }
}
