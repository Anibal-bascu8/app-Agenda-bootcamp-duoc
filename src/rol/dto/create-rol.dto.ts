import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateRolDto {

    @IsString()
    @ApiProperty()
    rol:string;
    
    @IsString()
    @IsOptional()
    @ApiProperty()
    descripcion?:string
}
