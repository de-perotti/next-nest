import { NestFactory } from "@nestjs/core";
import { NextInterceptor } from "../next/next.interceptor";
import { AppModule } from "../app/app.module";
import { NextService } from "../next/next.service";
import { ConfigService } from "../config/config.service";

declare const module: any;

(async function bootstrap() {
  const nestApplication = await NestFactory.create(AppModule);

  const nextInterceptor = nestApplication.get(NextInterceptor);
  nestApplication.useGlobalInterceptors(nextInterceptor);

  const nextService = nestApplication.get<NextService>(NextService);
  await nextService.prepare();

  const configService = nestApplication.get<ConfigService>(ConfigService);
  await nestApplication.listen(configService.getPort());

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => nestApplication.close());
  }
})();
