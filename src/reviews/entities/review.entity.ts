import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gender } from './gender.entity';
import { Type } from 'src/types/entities/type.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @JoinTable()
  @ManyToMany(() => Type, (type) => type.reviews)
  type: Type;
  @JoinTable()
  @ManyToMany(() => Gender, (gender) => gender.reviews)
  gender: Gender;
  @Column()
  dateThatFinished: Date;
  @Column()
  team: string;
  @Column()
  score: number;
  @Column()
  interestingScore: number;
}
