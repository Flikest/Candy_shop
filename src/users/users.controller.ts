import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersEntity } from '../entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService:UsersService
    ){};
    @Post("create_users")
    insertUsers(@Body() body:UsersEntity){
        return this.usersService.insertUser(body);
    };
    @Delete("delete_users")
    deleteUsres(@Body() body:UsersEntity){
        return this.usersService.deleteUsers(body);
    };
    @Get()
    fiendAll(){
        return this.usersService.findAll();
    };
};
