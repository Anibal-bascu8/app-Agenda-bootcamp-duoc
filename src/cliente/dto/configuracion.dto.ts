import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsObject, isObject, IsString, Length } from "class-validator"
import { FooterDto } from "./footer.dto"
import { LoginConfigDto } from "./login-config.dto"
import { ServicioEmailDto } from "./servicio-email.dto"
import { ToolbarDto } from "./toolbar.dto"

export class ConfiguracionDto {

    @IsString()
    @ApiProperty()
    baseHref:string

    @IsString()
    @ApiProperty()
    colorP1:string

    @IsString()
    @ApiProperty()
    colorP2:string

    @IsString()
    @ApiProperty()
    colorP3:string

    @IsString()
    @ApiProperty()
    colorP4:string

    @IsString()
    @ApiProperty()
    colorP5:string

    @IsString()
    @ApiProperty()
    colorP6:string

    @IsString()
    @ApiProperty()
    colorP7:string

    @IsString()
    @ApiProperty()
    colorP8:string

    @IsString()
    @ApiProperty()
    colorP9:string

    @IsString()
    @ApiProperty()
    favicon:string
   

    @IsString()
    @ApiProperty()
    modo:string

    

    @IsString()
    @ApiProperty()
    imagenFondo: string


    @IsObject()
    @ApiProperty()
    toolbar: ToolbarDto

    @IsObject()
    @ApiProperty()
    login: LoginConfigDto


    @IsObject()
    @ApiProperty()
    footer: FooterDto

    @IsObject()
    @ApiProperty()
    servicioEmail: ServicioEmailDto
   
    @IsString()
    @ApiProperty()
    urlDeclaracionSalud:string

    @IsBoolean()
    @ApiProperty()
    construccion:boolean

}