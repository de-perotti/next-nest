import { Test, TestingModule } from "@nestjs/testing";
import { NextController } from "./next.controller";
import { NextService } from "./next.service";
import { ConfigModule } from "../config/config.module";
import { NextModule } from "./next.module";

describe("Next Controller", () => {
  let controller: NextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NextModule]
    }).compile();

    controller = module.get<NextController>(NextController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
