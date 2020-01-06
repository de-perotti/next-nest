import { Test, TestingModule } from "@nestjs/testing";
import { NextService } from "./next.service";

describe("NextService", () => {
  let service: NextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextService]
    }).compile();

    service = module.get<NextService>(NextService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
