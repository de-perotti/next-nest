import { Injectable } from "@nestjs/common";
import next from "next";
import { NextConfigService } from "../config/next-config/next-config.service";

@Injectable()
export class NextService {
  private readonly nextApp: ReturnType<typeof next>;

  constructor(private readonly configService: NextConfigService) {
    this.nextApp = next(configService.getNextConfig());
  }

  getHandler() {
    return this.nextApp.getRequestHandler();
  }

  prepare() {
    return this.nextApp.prepare();
  }
}
