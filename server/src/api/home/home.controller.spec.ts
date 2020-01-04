import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';

describe('AppController', () => {
  let appController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
    }).compile();

    appController = app.get<HomeController>(HomeController);
  });
});
