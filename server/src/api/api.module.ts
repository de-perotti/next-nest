import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';

@Module({
  controllers: [HomeController],
})
export class ApiModule {}
