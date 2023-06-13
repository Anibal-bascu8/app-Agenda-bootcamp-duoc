import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateVehiculoDto {
    
    @IsString()
    @ApiProperty()
    patente: string

    @IsString()
    @ApiProperty()
    marca: string
    
    @IsString()
    @ApiProperty()
    modelo: string
    
    @IsString()
    @ApiProperty()
    ano: string
}
