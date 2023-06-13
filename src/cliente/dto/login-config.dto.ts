import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class LoginConfigDto {

    @IsString()
    @ApiProperty()
    color:string

    @IsString()
    @ApiProperty()
    titulo:string
}