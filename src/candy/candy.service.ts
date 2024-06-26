import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CandyEntity } from '../entity/candy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CandyService {
    constructor(
        @InjectRepository(CandyEntity)
        private CandyRepository:Repository<CandyEntity>
    ) {};

    insertCandy(body:CandyEntity) {
        return this.CandyRepository.insert(body);
    };

    deleteCandy(body:CandyEntity) {
        return this.CandyRepository.delete(body);
    };

    findAll() {
        return this.CandyRepository.find();
    };
}