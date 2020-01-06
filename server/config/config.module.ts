import { Module } from "@nestjs/common";
import { NextConfigService } from "./next-config/next-config.service";
import { ConfigService } from "./config.service";

@Module({
  providers: [NextConfigService, ConfigService],
  exports: [NextConfigService]
})
export class ConfigModule {}
