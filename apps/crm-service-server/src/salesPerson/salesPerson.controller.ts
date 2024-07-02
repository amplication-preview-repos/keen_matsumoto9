import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesPersonService } from "./salesPerson.service";
import { SalesPersonControllerBase } from "./base/salesPerson.controller.base";

@swagger.ApiTags("salesPeople")
@common.Controller("salesPeople")
export class SalesPersonController extends SalesPersonControllerBase {
  constructor(protected readonly service: SalesPersonService) {
    super(service);
  }
}
