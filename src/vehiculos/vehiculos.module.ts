import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';
import { Vehiculo } from './entities/vehiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculosController],
  providers: [VehiculosService],
  exports: [VehiculosService]
})
export class VehiculosModule {}
