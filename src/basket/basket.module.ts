import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketEntity } from '../entity/basket.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BasketEntity])],
  providers: [BasketService],
  controllers: [BasketController]
})
export class BasketModule {}
