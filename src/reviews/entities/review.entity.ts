import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  gender: string;
  @Column()
  dateThatFinished: Date;
  @Column()
  team: string;
  @Column()
  score: number;
  @Column()
  interestingScore: number;
}
