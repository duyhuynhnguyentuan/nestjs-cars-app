import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { CatsResolver } from "./cats.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { CatSchema } from "./schemas/cat.schema";

@Module({
    //The MongooseModule provides the forFeature() method to configure the module, including defining which models should be registered in the current scope.
    imports: [MongooseModule.forFeature([{ name: "Cat", schema: CatSchema }])],
//   imports: [DatabaseModule],
//   controllers: [Cat]  
 providers: [CatsResolver],
})

export class CatsModule {}