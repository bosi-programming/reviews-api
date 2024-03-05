import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly type: number;
  @IsNumber()
  readonly gender: number;
  @IsDate()
  readonly dateThatFinished: Date;
  @IsString()
  readonly team: string;
  @IsNumber()
  readonly score: number;
  @IsNumber()
  readonly interestingScore: number;
}
