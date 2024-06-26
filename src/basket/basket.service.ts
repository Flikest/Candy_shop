import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BasketEntity } from '../entity/basket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BasketService {
    constructor(
        @InjectRepository(BasketEntity)
        private basketRepository:Repository<BasketEntity>
    ) {}

    AddToBasket(body:BasketEntity) {
        return this.basketRepository.insert(body);
    };

    deleteInBasket(body:BasketEntity) {
        return this.basketRepository.delete(body);
    };

    findAll() {
        return this.basketRepository.find();
    };

}
