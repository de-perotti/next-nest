import { Module } from "@nestjs/common";
import { NextController } from "./next.controller";
import { NextInterceptor } from "./next.interceptor";
import { NextService } from "./next.service";
import { ConfigModule } from "../config/config.module";

@Module({
  providers: [NextInterceptor, NextService],
  controllers: [NextController],
  exports: [NextInterceptor, NextService],
  imports: [ConfigModule]
})
export class NextModule {}
