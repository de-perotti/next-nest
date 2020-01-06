import { Test, TestingModule } from "@nestjs/testing";
import { NextConfigService } from "./next-config.service";

describe("NextConfigService", () => {
  let service: NextConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextConfigService]
    }).compile();

    service = module.get<NextConfigService>(NextConfigService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
