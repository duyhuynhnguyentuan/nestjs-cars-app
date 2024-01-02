import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { CarInput } from "src/cars/inputs/car.input";

@Resolver()
export class CarsResolver {
  constructor(
    private readonly carService: CarsService
  ) { }

  @Query(() => String)
  async hello() {
    return 'hello'
  }
  @Query(() => [CreateCarDto])
  async cars() {
    return this.carService.findAll()
  }
  @Mutation(() => CreateCarDto)
  async createCar(@Args('input') input: CarInput) {
    return this.carService.create(input)
  }

}