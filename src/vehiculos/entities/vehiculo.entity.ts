import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Vehiculo')
export class Vehiculo {


    // @PrimaryGeneratedColumn()
    // id: number;

    @ObjectIdColumn()
    _id:ObjectId;
    
    @Column()
    patente: string

    @Column()
    marca: string

    @Column()
    modelo: string

    @Column()
    ano: string
}
