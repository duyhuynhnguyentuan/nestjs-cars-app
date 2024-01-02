import { Document } from 'mongoose';

export interface Car extends Document {
  readonly name: string;
  readonly dailyPrice: number;
  readonly monthlyPrice: number;
  readonly mileage:string;
  readonly gas: string;
  readonly gearType: string;
  readonly thumbnailUrl: string;
}