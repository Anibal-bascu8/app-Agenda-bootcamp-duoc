import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, isNotEmpty, IsString } from 'class-validator';
import { LoginDto } from './login-auth.dto';

export class RegisterDto {
  @IsString()
  @ApiProperty()
  rut: string;

  @IsString()
  @ApiProperty()
  contrasena: string;

  @IsString()
  @ApiProperty()
  nombre: string;

  @IsString()
  @ApiProperty()
  apellido: string;

  @IsString()
  @ApiProperty()
  email: string;
}
