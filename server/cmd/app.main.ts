import { nextApp } from "../../app/app";
import { NestFactory } from "@nestjs/core";
import { NextInterceptor } from "../next/next.interceptor";
import { AppModule } from "../app/app.module";

nextApp
  .prepare()
  .then(async function bootstrap() {
    const nestApplication = await NestFactory.create(AppModule);

    return nestApplication.useGlobalInterceptors(
      nestApplication.get(NextInterceptor)
    );
  })
  .then(app => app.listen("3000"));
