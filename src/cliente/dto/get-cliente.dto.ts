import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNumber, IsString } from "class-validator"

export class GetClientesDto {


    @IsNumber()
    @ApiProperty()
    id:number
    
    @IsString()
    @ApiProperty()
    uuid:string
    

    @IsString()
    @ApiProperty()
    rut:string

    @IsString()
    @ApiProperty()
    razonSocial:string

    @IsString()
    @ApiProperty()
    baseHref:string


    @IsBoolean()
    @ApiProperty()
    activo:boolean
    
}