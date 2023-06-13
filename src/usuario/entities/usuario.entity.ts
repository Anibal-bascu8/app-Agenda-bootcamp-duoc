import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
export class Usuario {
  
  // @PrimaryGeneratedColumn()
  // id: number;

  @ObjectIdColumn()
  _id:ObjectId;
  
  @Column()
  rut: string;

  @Column()
  contrasena: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  rol:string

  @ManyToOne(() => Rol, rol => rol.usuarios)
  @JoinColumn({name:'rol_id'})
  rol_id:string;
  // rol:string;
}
