import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { NextController } from "./next.controller";
import { IncomingMessage } from "http";

export function shouldThrowNotFound(context: ExecutionContext) {
  const startsWithApi =
    context.getArgByIndex(0).url?.startsWith("/api") || false;

  return context.getClass() === NextController && startsWithApi;
}

@Injectable()
export class NextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (shouldThrowNotFound(context)) {
      return throwError(new NotFoundException());
    }

    return next.handle();
  }
}
