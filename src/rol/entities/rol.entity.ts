import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, Index, ObjectId, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class Rol  {
    
    // @PrimaryGeneratedColumn()
    // id: number;
    @ObjectIdColumn()
    _id:ObjectId;

    @Column()
    rol:string;

    @Column()
    descripcion:string

    // @OneToMany(() => Usuario, user => user.rol)
    @OneToMany(() => Usuario, user => user.rol_id)
    usuarios:Usuario[]
}