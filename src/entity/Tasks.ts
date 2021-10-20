import { create } from 'domain';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number
 
    @Column()
    nome: string;
 
    @Column()
    ra: string;

    @CreateDateColumn()
    dataNasc: Date;

    @Column()
    idade: number;

    @Column({
        default: true
        })
        Matriculado: boolean;
 
    @Column({
        default: false
    })
    finished: boolean;
    
}
