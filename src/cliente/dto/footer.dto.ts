import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class FooterDto {

    @IsString()
    @ApiProperty()
    tituloColor:string

    @IsString()
    @ApiProperty()
    verDireccion:boolean

    @IsString()
    @ApiProperty()
    direccion:string

    @IsString()
    @ApiProperty()
    verTelefono:boolean
    
    @IsString()
    @ApiProperty()
    telefono:string

    @IsString()
    @ApiProperty()
    verEmail:boolean

    @IsString()
    @ApiProperty()
    email:string

    @IsString()
    @ApiProperty()
    derImage:string

    
}