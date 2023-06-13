import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaenaService } from './faena.service';
import { CreateFaenaDto } from './dto/create-faena.dto';
import { UpdateFaenaDto } from './dto/update-faena.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Faenas')
@Controller('faenas')
export class FaenaController {
  constructor(private readonly faenaService: FaenaService) {}

  @Post()
  create(@Body() createFaenaDto: CreateFaenaDto) {
    return this.faenaService.create(createFaenaDto);
  }

  @Get()
  findAll() {
    return this.faenaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faenaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() faena: UpdateFaenaDto) {
    return this.faenaService.update(id, faena);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faenaService.remove(+id);
  }
}
