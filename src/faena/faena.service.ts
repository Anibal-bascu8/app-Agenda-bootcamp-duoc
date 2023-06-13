import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateFaenaDto } from './dto/create-faena.dto';
import { UpdateFaenaDto } from './dto/update-faena.dto';
import { Faena } from './entities/faena.entity';

@Injectable()
export class FaenaService {
  
  constructor(
    @InjectRepository(Faena) private faenaRep: Repository<Faena>,
  ){

  }
  async findAll() {
    try {
      const data = await this.faenaRep.find();
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
    
    try {
      const data = await this.faenaRep.findOne({id_: new ObjectId(id)} as FindOneOptions<Faena>)
      
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

  async create(faena: CreateFaenaDto) {
    try {
      const data = await this.faenaRep.save(faena)
      
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

  async update(id: any, faena: UpdateFaenaDto) {
    try {
      const {affected} = await this.faenaRep.update(id, faena)
      
      if (affected !== 1) {
        return {
          success: false,
          data:'La Faena no presenta cambios. No se ha modificado ningún registro'
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
      const {affected} = await this.faenaRep.delete(id)

      if (affected === 0) {
        return {
          success:false,
          data:'No se ha eliminado ningún registro'
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
