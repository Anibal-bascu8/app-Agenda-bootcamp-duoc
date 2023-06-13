import { Column, Entity, Generated, JoinColumn, ManyToOne, ObjectId, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Faena')
export class Faena {

    
    // @PrimaryGeneratedColumn()
    // id: number;
    @ObjectIdColumn()
    _id:ObjectId;
    
    @Column()
    nombre: string;
    
    @Column()
    fecha_inicio: Date;
    
    @Column()
    fecha_termino: Date;
    
    @Column()
    descripcion: string;
    
    @Column()
    empresa: string;
    
    @Column()
    validez: string;
    
    @Column()
    trabajo_asociado: string;
}
