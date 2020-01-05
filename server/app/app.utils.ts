import { Test } from "@nestjs/testing";
import { AppModule } from "./app.module";
import { NextInterceptor } from "../next/next.interceptor";
import { ModuleMetadata } from "@nestjs/common/interfaces/modules/module-metadata.interface";

export async function bootstrapAppTestModule(metadata?: ModuleMetadata) {
  const testingModule = await Test.createTestingModule(
    metadata || {
      imports: [AppModule]
    }
  ).compile();

  return testingModule
    .createNestApplication()
    .useGlobalInterceptors(testingModule.get(NextInterceptor));
}
