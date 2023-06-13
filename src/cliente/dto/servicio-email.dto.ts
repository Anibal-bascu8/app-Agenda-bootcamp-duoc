import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class ServicioEmailDto {

    @IsString()
    @ApiProperty()
    logo:string

    @IsString()
    @ApiProperty()
    logoFooter:string

    @IsString()
    @ApiProperty()
    mailRemitente:string

}