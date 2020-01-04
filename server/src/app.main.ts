import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { nextApp } from '../../app/app';
import { NextInterceptor } from './next/next.interceptor';

nextApp.prepare().then(
  async function bootstrap() {
    const nestApplication = await NestFactory.create(ApiModule);

    nestApplication.useGlobalInterceptors(
      nestApplication.get(NextInterceptor),
    );

    await nestApplication.listen('3000');
  }
);
