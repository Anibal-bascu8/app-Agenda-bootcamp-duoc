import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register-auth.dto';
import { LoginDto } from './dto/login-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RoleGuard } from './guards/role.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin', 'super') 
  registerUser(@Body() usuario: RegisterDto) {
    return this.authService.register(usuario);
  }

  @Post('login')
  loginUser(@Body() usuario: LoginDto) {
    return this.authService.login(usuario);
  }
}
