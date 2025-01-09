import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> | Observable<boolean> {
    return true;
  }

  async extractPayloadFromHeader(request: Request) {
    const authHeader = request.headers.authorization.split(' ');
  }
}
