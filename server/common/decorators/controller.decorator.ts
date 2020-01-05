import { Controller } from "@nestjs/common";

export const ApiController = (name: string) => Controller(`api/${name}`);
