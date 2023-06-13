import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsJSON, IsNumber, IsObject, IsString, Length } from "class-validator"
import { ConfiguracionDto } from "./configuracion.dto"
import { DireccionDto } from "./direccion.dto"

export class CreateClienteDto {


    @IsString()
    @Length(1, 12,{message: 'Rut debe contener entre 1 y 12 caracteres'})
    @ApiProperty()
    rut:string

    @IsString()
    @Length(1, 200,{message: 'Razon Social debe contener entre 1 y 200 caracteres'})
    @ApiProperty()
    razonSocial:string

    @IsString()
    @Length(0, 20,{message: 'Base debe contener entre 1 y 20 caracteres'})
    @ApiProperty()
    baseHref:string


 
    @IsObject()
    @ApiProperty()
    configuracion:ConfiguracionDto




    @IsBoolean()
    @ApiProperty()
    activo:boolean

}
