import { Controller, Get, Req, Res } from "@nestjs/common";
import { nextApp } from "../../app/app";
import { IncomingMessage, ServerResponse } from "http";

@Controller("*")
export class NextController {
  private nextHandler = nextApp.getRequestHandler();

  @Get()
  renderNextPage(@Req() req: IncomingMessage, @Res() res: ServerResponse) {
    return this.nextHandler(req, res);
  }
}
