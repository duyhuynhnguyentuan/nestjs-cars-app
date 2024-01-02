import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Car } from './interfaces/car.interface';
import { CarInput } from 'src/cars/inputs/car.input';

@Injectable()
export class CarsService {
  constructor(@InjectModel('Car') private carModel: Model<Car>) { }

  async create(createCarDto: CarInput): Promise<Car> {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
}
