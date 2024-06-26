import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersEntity } from './entity/users.entity';
import { UsersModule } from './users/users.module';
import { CandyModule } from './candy/candy.module';
import { CandyEntity } from './entity/candy.entity';
import { BasketModule } from './basket/basket.module';
import { BasketEntity } from './entity/basket.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.production.env'],
    }),
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [UsersEntity, CandyEntity, BasketEntity],
      synchronize: true,
    }),
    UsersModule,
    CandyModule,
    BasketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
