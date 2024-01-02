import { Connection } from 'mongoose';
import { CarSchema } from './schemas/car.schema';

export const carsProviders = [
  {
    //avoid using magic strings like 'cat_model', 'database_connection'. They should be kept in the seperated constants.ts
    provide: 'CAR_MODEL',
    useFactory: (connection: Connection) => connection.model('Car', CarSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];