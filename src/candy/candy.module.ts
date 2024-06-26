import { Module } from '@nestjs/common';
import { CandyService } from './candy.service';
import { CandyController } from './candy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandyEntity } from '../entity/candy.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CandyEntity])],
  providers: [CandyService],
  controllers: [CandyController]
})
export class CandyModule {}
