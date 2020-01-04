import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { NextController } from './next.controller';
import { IncomingMessage } from 'http';

@Injectable()
export class NextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getClass() === NextController && this.urlStartsWithApi(context)) {
      return throwError(new NotFoundException());
    }

    return next.handle();
  }

  private urlStartsWithApi(context: ExecutionContext): boolean {
    const incomingMessage = context.getArgByIndex<IncomingMessage>(0);
    return incomingMessage.url?.startsWith('/api') || false;
  }
}
