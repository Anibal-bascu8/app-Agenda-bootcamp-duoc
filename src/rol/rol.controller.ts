import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Roles } from 'src/auth/decorators/rol.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Roles Usuarios')
@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  @Roles('admin', 'super')
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  @Roles('admin', 'super')
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'super')
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin', 'super')
  update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto) {
    return this.rolService.update(+id, updateRolDto);
  }

  @Delete(':id')
  @Roles('admin', 'super')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }
}
