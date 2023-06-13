// import { ApiProperty } from '@nestjs/swagger/dist';
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty()
  rut: string;

  @IsString()
  @ApiProperty()
  contrasena: string;
}
