import { Module } from '@nestjs/common';
import { FaenaService } from './faena.service';
import { FaenaController } from './faena.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faena } from './entities/faena.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faena])],
  controllers: [FaenaController],
  providers: [FaenaService],
  exports: [FaenaService]
})
export class FaenaModule {}
