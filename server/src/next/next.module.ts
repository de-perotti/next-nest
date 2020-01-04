import { Module } from '@nestjs/common';
import { NextController } from './next.controller';
import { NextInterceptor } from './next.interceptor';

@Module({
  providers: [NextInterceptor],
  controllers: [NextController],
})
export class NextModule {}
