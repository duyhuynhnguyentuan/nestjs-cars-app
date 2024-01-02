import { Module } from "@nestjs/common";
import { CarsResolver } from "./cars.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { CarSchema } from "./schemas/car.schema";
import { CarsService } from "./cars.service";

@Module({
    //The MongooseModule provides the forFeature() method to configure the module, including defining which models should be registered in the current scope.
    imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
    providers: [CarsResolver, CarsService],
})

export class CarsModule { }