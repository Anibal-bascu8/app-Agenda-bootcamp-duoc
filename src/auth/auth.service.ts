import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  saltOrRounds = 10;

  constructor(
    @InjectRepository(Usuario)
    private usuarioRep: Repository<Usuario>,
    private jwtAuthService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { rut, contrasena } = loginDto;

    try {
      const dataFind = await this.usuarioRep.findOne({ where: { rut } });

      if (!dataFind) {
        return {
          success: false,
          data: 'Usuario no encontrado',
        };
      }

      const checkPassword = await bcrypt.compare(
        contrasena,
        dataFind.contrasena,
      );

      if (!checkPassword) {
        
        return {
          success: false,
          data: 'Usuario o contraseña inválidos',
        };
    
      }

      const payload = { id: dataFind.rut, name: dataFind.nombre };
      const token = this.jwtAuthService.sign(payload);

      return {
        success: true,
        data: { ...dataFind, token },
      };
    } catch (error) {
      
    }
  }

  async register(registerDto: RegisterDto) {
    const { contrasena } = registerDto;
    const plainToHash = await bcrypt.hash(contrasena, this.saltOrRounds);
    
    registerDto = { ...registerDto, contrasena: plainToHash };
    
    try {
      const datax = await this.usuarioRep.create(registerDto);
      
      return {
        success: true,
        datax,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }

  verifyToken(token:string) {
    try {
      // return this.jwtAuthService.verify(token, process.env.JWT_SECRET_KEY)
      return this.jwtAuthService.decode(token)
    } catch (error) {
      console.log(error.message);
      return error
    }
  }
}
