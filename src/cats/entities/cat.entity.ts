import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: '' })
  nickname: string;

  @Column({ default: 0 })
  age: number;

  @Column()
  breed: string;

  @Column({ default: true })
  isActive: boolean;
}
