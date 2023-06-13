import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFaenaDto {


    
    @IsString()
    @ApiProperty()
    nombre: string;

    
    @IsString()
    @ApiProperty()
    fecha_inicio: string;

    
    @IsString()
    @ApiProperty()
    fecha_termino: string;

    
    @IsString()
    @ApiProperty()
    descripcion: string;

    
    @IsString()
    @ApiProperty()
    empresa: string;

    
    @IsString()
    @ApiProperty()
    validez: string;

    
    @IsString()
    @ApiProperty()
    trabajo_asociado: string;
}
