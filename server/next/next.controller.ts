import { Controller, Get, Req, Res } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";
import { NextService } from "./next.service";

@Controller("*")
export class NextController {
  private readonly nextHandler: any;

  constructor(private readonly nextApp: NextService) {
    this.nextHandler = nextApp.getHandler();
  }

  @Get()
  renderNextPage(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    return this.nextHandler(req, res);
  }
}
