import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('role')
  getRole() {
    return 'Um role';
  }
}
