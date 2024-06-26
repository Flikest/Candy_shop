import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketEntity } from '../entity/basket.entity';

@Controller('basket')
export class BasketController {
    constructor(
        private readonly basketService:BasketService
    ){}

    @Post("create_candy")
    insertUsers(@Body() body:BasketEntity){
        return this.basketService.AddToBasket(body);
    };
    @Delete("delete_candy")
    deleteUsres(@Body() body:BasketEntity){
        return this.basketService.deleteInBasket(body);
    };
    @Get()
    fiendAll(){
        return this.basketService.findAll();
    };

}
