import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  //npm i @nestjs/config import
  imports: [ConfigModule.forRoot(), GraphQLModule.forRoot<ApolloDriverConfig>({
    playground: true,
    driver: ApolloDriver,
    autoSchemaFile: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
