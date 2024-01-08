import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { config } from 'dotenv';
@Module({
  //npm i @nestjs/config import
  imports: [
    CarsModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: process.env.NODE_ENV === "production" ? false : true,
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    //The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
