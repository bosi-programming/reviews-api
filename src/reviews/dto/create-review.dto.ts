import { isDate, isNumber, isString } from 'class-validator';

export class CreateReviewDto {
  @isString()
  readonly name: string;
  @isString()
  readonly type: string;
  @isString()
  readonly gender: string;
  @isDate()
  readonly dateThatFinished: Date;
  @isString()
  readonly team: string;
  @isNumber()
  readonly score: number;
  @isNumber()
  readonly interestingScore: number;
}
