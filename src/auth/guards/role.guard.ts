import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private readonly authService:AuthService,
    private readonly reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ) {
    const roles:string[] = this.reflector.get<string[]>('roles',context.getHandler())
    
    if(!roles){
      return false
    }
    
    const req = context.switchToHttp().getRequest()
    const token = req.headers.authorization?.split(' ')[1]
    

    if (!token) {
      return false
    }
    
    const tokenData = this.authService.verifyToken(token)

    return roles.includes(tokenData.rol);
  }
}
