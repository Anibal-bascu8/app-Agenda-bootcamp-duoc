import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class DireccionDto {

    @IsString()
    @ApiProperty()
    departamento:string

    @IsString()
    @ApiProperty()
    direccion:string
}