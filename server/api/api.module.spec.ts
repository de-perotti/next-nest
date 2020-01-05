import { ApiModule } from "./api.module";
import { Test, TestingModule } from "@nestjs/testing";
import { Controller } from "@nestjs/common";

describe("", () => {
  let mut: TestingModule;

  beforeEach(async () => {
    mut = await Test.createTestingModule({ imports: [ApiModule] }).compile();
    const controller = mut.get(Controller);
  });

  it("can get a controller", () => {
    expect(true).toBeTruthy();
  });
});
