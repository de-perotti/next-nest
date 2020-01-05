import request from "supertest";
import { INestApplication } from "@nestjs/common";
import { bootstrapAppTestModule } from "../../app/app.utils";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await bootstrapAppTestModule();

    await app.init();
  });

  afterAll(() => app.close());

  describe("/api/ping", () => {
    it("should pong back", async () => {
      await request(app.getHttpServer())
        .get("/api/ping")
        .expect(200)
        .expect("pong");
    });
  });

  describe("/api/ping/*", () => {
    it("should not find a given route", async () => {
      await request(app.getHttpServer())
        .get("/api/ping/anything")
        .expect(404)
        .expect(/not found/i);
    });
  });
});
