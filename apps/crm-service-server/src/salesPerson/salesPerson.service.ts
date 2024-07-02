import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesPersonServiceBase } from "./base/salesPerson.service.base";

@Injectable()
export class SalesPersonService extends SalesPersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
