import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>
    ) {};

    // TOВOINTHEFUTURE: authenticate with OpenID

    insertUser(body:UsersEntity) {
        return this.usersRepository.insert(body);
    };

    deleteUsers(body:UsersEntity) {
        return this.usersRepository.delete(body);
    };

    findAll() {
        return this.usersRepository.find();
    };
};
