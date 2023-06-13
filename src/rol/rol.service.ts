import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { FindOneOptions, FindOptions, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class RolService {

  constructor(@InjectRepository(Rol) private rolRep: Repository<Rol>) { }

  async create(rol: CreateRolDto) {
    try {
      const data = await this.rolRep.save(rol)
      console.log(data);

      return {
        success: true,
        data
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        data: error.message
      }
    }

  }

  async findAll() {

    try {
      const data = await this.rolRep.find()
      return {
        success: true,
        data
      }
    } catch (error) {
      console.log(error)
      return {
        success: false,
        data: error
      }
    }
  }

  async findOne(rol: string) {
    try {
      const data = await this.rolRep.findOne({
        where: {rol: rol}
      })

      if (!data) {
        return {
          success:false,
          data:'Rol no encontrado.'
        }
      }
      return {
        success:true,
        data
      }
    } catch (error) {
      console.log(error)
      return {
        success:false,
        data:error
      }
    }
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    try {
      const {affected} = await this.rolRep.update(id, updateRolDto)
      
      if (affected !== 1) {
        return {
          success:false,
          data:'No se ha modificado ningún rol'
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
      const {affected} = await this.rolRep.delete(id)

      if (affected === 0) {
        return {
          success:false,
          data:'No se ha eliminado ningún rol'
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
