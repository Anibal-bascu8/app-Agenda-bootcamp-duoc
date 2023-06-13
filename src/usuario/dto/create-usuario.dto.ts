import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty, IsString } from 'class-validator';

export class createUsuarioDto {
  @ApiProperty()
  rut: string;

  @IsString()
  @ApiProperty()
  contrasena: string;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsNotEmpty()
  email: string;
}
