import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/rol.decorator';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';


@ApiBearerAuth()
@ApiTags('Rutas Cliente')
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @Roles('super','admin')
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @Roles('admin', 'super')
  findAll() {
    return this.clienteService.findAll;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Get('rut/:rut')
  @Roles('admin','revisor')
  findRut(@Param('rut') rut: string, @GetUser() req:any) {
    console.log(req)
    return this.clienteService.findRut(rut);
  }

  @Patch(':id')
  @Roles('super','admin')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @Roles('super')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
