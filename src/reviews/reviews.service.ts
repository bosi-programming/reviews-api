import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';
import { Type } from 'src/types/entities/type.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>,
  ) { }

  async create(createReviewDto: CreateReviewDto) {
    const type = await this.preloadType(createReviewDto.type);
    const gender = await this.preloadGender(createReviewDto.gender);

    const review = this.reviewRepository.create({
      ...createReviewDto,
      type,
      gender,
    });
    return this.reviewRepository.save(review);
  }

  findAll() {
    return this.reviewRepository.find();
  }

  async findOne(id: number) {
    const review = await this.reviewRepository.findOne({ where: { id: id } });
    if (!review) {
      throw new NotFoundException(`Review #${id} not found`);
    }
    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const type = await this.preloadType(updateReviewDto.type);
    const gender = await this.preloadGender(updateReviewDto.gender);

    const review = await this.reviewRepository.preload({
      id: id,
      ...updateReviewDto,
      type,
      gender,
    });
    if (!review) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.reviewRepository.save(review);
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.reviewRepository.remove(review);
  }

  private async preloadType(id: number): Promise<Type> {
    const existingType = await this.typeRepository.findOne({
      where: { id },
    });
    if (!existingType) {
      throw new NotFoundException(`Type #${id} not found`);
    }
    return existingType;
  }

  private async preloadGender(id: number): Promise<Gender> {
    const existingGender = await this.genderRepository.findOne({
      where: { id },
    });
    if (!existingGender) {
      throw new NotFoundException(`Gender #${id} not found`);
    }
    return existingGender;
  }
}
