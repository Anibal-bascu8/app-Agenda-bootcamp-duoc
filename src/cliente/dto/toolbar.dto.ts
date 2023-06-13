import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNumber, IsString } from "class-validator"

export class ToolbarDto {

    @IsString()
    @ApiProperty()
    logo: string

    @IsString()
    @ApiProperty()
    color: string

    @IsString()
    @ApiProperty()
    href: string

    @IsString()
    @ApiProperty()
    title: string

    @IsNumber()
    @ApiProperty()
    logoWidth: number

    @IsString()
    @ApiProperty()
    iconColor: string

   

    @IsBoolean()
    @ApiProperty()
    verFacebook: boolean

    @IsString()
    @ApiProperty()
    hrfFacebook: string

    @IsBoolean()
    @ApiProperty()
    verTwitter: boolean

    @IsString()
    @ApiProperty()
    hrfTwitter: string

    @IsBoolean()
    @ApiProperty()
    verInstagram: boolean

    @IsString()
    @ApiProperty()
    hrfInstagram: string

    @IsBoolean()
    @ApiProperty()
    verFlickr: boolean

    @IsString()
    @ApiProperty()
    hrfFlickr: String


    @IsBoolean()
    @ApiProperty()
    verYoutube: boolean

    @IsString()
    @ApiProperty()
    hrfYoutube: String


}