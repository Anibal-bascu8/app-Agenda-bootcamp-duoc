import { ObjectId } from "mongodb";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, Generated, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ConfiguracionDto } from "../dto/configuracion.dto";
import { DireccionDto } from "../dto/direccion.dto";


@Entity('clientes')
export class Cliente {

    @ObjectIdColumn()
    _id:ObjectId;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({ unique: true, type: 'varchar', length: 12 })
    rut: string

    @Column({ type: 'varchar', length: 255 })
    razonSocial: string


    @Column({ type: 'boolean', default:false })
    activo: boolean

    @Column({ type: 'json' })
    configuracion:ConfiguracionDto



   

    @CreateDateColumn({ name: 'createdAt', type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt', type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;




}
