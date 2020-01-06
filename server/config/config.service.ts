import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
  getPort() {
    return process.env.PORT || "3000";
  }
}
