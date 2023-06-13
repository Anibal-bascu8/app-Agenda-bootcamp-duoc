import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { updateUsuario } from './dto/update-usuario.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRep: Repository<Usuario>,
  ) {}

  async findAll() {
    try {
      const data = await this.usuarioRep.find();
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

  async findOne(id: string) {
    console.log(id)
    // var nuevoId = new ObjectId(id)
    try {

      const data = await this.usuarioRep.findOne({ _id:new ObjectId(id)} as FindOneOptions<Usuario> );
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log(error)
      return {
        success: false,
        data: error.message,
      };
    }
  }

  async update(id: number, updateUsuarioDto: updateUsuario) {
    try {
      const data = await this.usuarioRep.update(id, updateUsuarioDto);
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.usuarioRep.delete(id);
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }
}
