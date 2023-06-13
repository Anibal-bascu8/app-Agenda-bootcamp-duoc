import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseDto } from 'src/shared/response-query.dto';
import { FindOneAndDeleteOptions, FindOneOptions, ObjectId } from 'typeorm';

import { Repository } from 'typeorm/repository/Repository';
import { CreateClienteDto, GetClientesDto, UpdateClienteDto } from './dto';
import { Cliente } from './entities/cliente.entity';


@Injectable()
export class ClienteService {


  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  

  ) { }


  // Crud
  async create(createClienteDto: CreateClienteDto): Promise<ResponseDto> {
    try {
      const datax = await this.clienteRepository.insert(createClienteDto)

      return {
        success: true,
        data: datax.generatedMaps[0]
      }

    } catch (error) {

      const { driverError } = error

      if (!driverError) {
        return {
          success: false,
          data: error
        }
      } else {
        return {
          success: false,
          data: [
            { path: driverError.table, message: driverError.detail }
          ]
        }
      }


    }
  }
  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<ResponseDto> {
    try {

      const {configuracion:{servicioEmail:{logo,logoFooter,mailRemitente},urlDeclaracionSalud}} = await this.clienteRepository.findOne({ _id:new ObjectId(id)} as FindOneOptions<Cliente> );
      const {configuracion:{servicioEmail:{logo:logoEntrante,logoFooter:logoFooterEntrante,mailRemitente:mailRemitenteEntrante},urlDeclaracionSalud:urlDeclaracionSaludEntrante}} = updateClienteDto

      const datax = await this.clienteRepository.update(id, updateClienteDto)


      

      return {
        success: true,
        data: datax.affected
      }

    } catch (error) {

      const { driverError } = error

      if (!driverError) {
        return {
          success: false,
          data: error
        }
      } else {
        return {
          success: false,
          data: [
            { path: driverError.table, message: driverError.detail }
          ]
        }
      }

    }
  }
  async remove(id: number): Promise<ResponseDto> {
    try {
      const datax = await this.clienteRepository.delete(id)

      return {
        success: true,
        data: datax.affected
      }

    } catch (error) {

      const { driverError } = error

      if (!driverError) {
        return {
          success: false,
          data: error
        }
      } else {
        return {
          success: false,
          data: [
            { path: driverError.table, message: driverError.detail }
          ]
        }
      }


    }
  }


  // Querys
  async findAll({ limit, offset }): Promise<ResponseDto> {
    try {

      const datax = await this.clienteRepository.find({ skip: offset, take: limit });

    

      if (datax.length == 0) {
        return {
          success: false,
          data: [
            {
              path: "Usuario",
              message: "No existen registros"
            }
          ]
        }
      } else {
        return {
          success: true,
          data: datax
        }
      }

    } catch (error) {

      return {
        success: false,
        data: error
      }

    }
  }
  async findOne(id: number): Promise<ResponseDto> {


    try {
   
      const datax = await this.clienteRepository.findOne({ _id:new ObjectId(id)} as FindOneOptions<Cliente> );




      if (!datax) {
        return {
          success: false,
          data: [
            {
              path: "Usuario",
              message: "No existen registros"
            }
          ]
        }
      } else {
        return {
          success: true,
          data: datax
        }
      }

    } catch (error) {

      return {
        success: false,
        data: error
      }

    }

  }
  async findRut(rut: string) {

    try {



      const datax = await this.clienteRepository.findOne({ where:{rut} });

      if (!datax) {
        return {
          success: false,
          data: [
            {
              path: "Usuario",
              message: "No existen registros"
            }
          ]
        }
      } else {
        return {
          success: true,
          data: datax
        }
      }

    } catch (error) {

      return {
        success: false,
        data: error
      }

    }

  }



}
