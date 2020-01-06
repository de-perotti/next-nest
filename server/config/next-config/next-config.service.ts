import { Injectable } from "@nestjs/common";
import path from "path";

@Injectable()
export class NextConfigService {
  getNextConfig() {
    return {
      dir: path.join(
        __dirname,
        process.env.NODE_ENV === "test" ? "../../.." : "../..",
        "app"
      ),
      dev: process.env.NODE_ENV !== "production"
    };
  }
}
