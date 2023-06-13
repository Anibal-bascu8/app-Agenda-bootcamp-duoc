import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo) private vehiculoRep: Repository<Vehiculo>,
  ){
    
  }

  async findAll() {
    try {
      const data = await this.vehiculoRep.find();
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        data: error.message,
      };
    }
  }
  
  async findOne(id: any) {
    // var nuevoId = new ObjectId(id)
    try {

      const data = this.vehiculoRep.findOne({ _id:new ObjectId(id)} as FindOneOptions<Vehiculo> );
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        data: error.message,
      };
    }
  }

  async create(vehiculo: CreateVehiculoDto) {

    
    try {
      const data = await this.vehiculoRep.save(vehiculo)
      

      return {
        success: true,
        data
      }
    } catch (error) {
      return {
        success: false,
        data: error.message
      }
    }

  }

  async update(id: any, UpdateVehiculoDto: UpdateVehiculoDto) {
    try {
      const {affected} = await this.vehiculoRep.update(id, UpdateVehiculoDto)
      
      if (affected !== 1) {
        return {
          success: false,
          data:'Vehiculo no presenta cambios. No se ha modificado ningún vehiculo'
        }
      }
      return {
        success:true,
        data:affected
      }
    
    } catch (error) {
      return {
        success:false,
        data: error.message
      }
    }
  }

  async remove(id: number) {
    try {
      const {affected} = await this.vehiculoRep.delete(id)

      if (affected === 0) {
        return {
          success:false,
          data:'No se ha eliminado ningún vehiculo'
        }
      }

      return {
        success:true,
        data:affected
      }
    } catch (error) {
      return {
        success:false,
        data:error.message
      }
    }
  }
}
