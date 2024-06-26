import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CandyService } from './candy.service';
import { CandyEntity } from '../entity/candy.entity';

@Controller('candy')
export class CandyController {
    constructor(
        private readonly CandyService:CandyService
    ) {};

    @Post("create_candy")
    insertUsers(@Body() body:CandyEntity){
        return this.CandyService.insertCandy(body);
    };
    @Delete("delete_candy")
    deleteUsres(@Body() body:CandyEntity){
        return this.CandyService.deleteCandy(body);
    };
    @Get()
    fiendAll(){
        return this.CandyService.findAll();
    };
};

