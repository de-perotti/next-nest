import { Module } from "@nestjs/common";
import { NextController } from "./next.controller";
import { NextInterceptor } from "./next.interceptor";

@Module({
  providers: [NextInterceptor],
  controllers: [NextController],
  exports: [NextInterceptor]
})
export class NextModule {}
