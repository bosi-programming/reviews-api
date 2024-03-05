import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Type } from 'src/types/entities/type.entity';
import { Gender } from './entities/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Type, Gender])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule { }
