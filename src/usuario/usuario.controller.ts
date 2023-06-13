import {
  Controller,Get,Post,Body,Patch,Param,Delete,UseGuards,} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/rol.decorator';

@ApiBearerAuth()
@ApiTags('Usuarios')
@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  // @Roles('admin','super')
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @Roles('admin','super')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }
}
