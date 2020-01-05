import { ApiController } from "../../common/decorators/controller.decorator";
import { Get } from "@nestjs/common";

@ApiController("ping")
export class PingController {
  @Get()
  pong() {
    return "pong";
  }
}
