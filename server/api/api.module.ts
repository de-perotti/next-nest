import { Module } from "@nestjs/common";
import { PingController } from "./ping/ping.controller";
import { NextModule } from "../next/next.module";

@Module({
  controllers: [PingController],
  imports: [NextModule]
})
export class ApiModule {}
