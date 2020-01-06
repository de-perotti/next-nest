import { Test, TestingModule } from "@nestjs/testing";
import { NextService } from "./next.service";
import { NextModule } from "./next.module";

describe("NextService", () => {
  let service: NextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NextModule]
    }).compile();

    service = module.get<NextService>(NextService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
