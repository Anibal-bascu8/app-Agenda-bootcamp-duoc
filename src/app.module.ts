import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/entities/rol.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { Vehiculo } from './vehiculos/entities/vehiculo.entity';
import { FaenaModule } from './faena/faena.module';
import { Faena } from './faena/entities/faena.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_ATLAS_URI,
      useUnifiedTopology: true,
      entities: [Usuario, Rol, Cliente, Vehiculo, Faena],
      synchronize: true,
      autoLoadEntities: true,
      logging: 'all',
    }),
    
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost', // o la dirección IP de tu servidor MySQL en Ubuntu
    //   port: 3306, // el puerto por defecto de MySQL
    //   username: 'jmf-nest',
    //   password: 'OTva74@*7I8d)-Um',
    //   database: 'jmf',
    //   entities: [Usuario, Rol, Cliente, Vehiculo, Faena],
    //   synchronize: true,
    //   autoLoadEntities: true,
    //   logging: 'all',
    // }),
    AuthModule,
    UsuarioModule,
    RolModule,
    ClienteModule,
    VehiculosModule,
    FaenaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
