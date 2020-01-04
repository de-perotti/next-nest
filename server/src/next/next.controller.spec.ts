import { Test, TestingModule } from '@nestjs/testing';
import { NextController } from './next.controller';

describe('Next Controller', () => {
  let controller: NextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NextController],
    }).compile();

    controller = module.get<NextController>(NextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
