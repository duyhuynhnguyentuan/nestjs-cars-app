import * as mongoose from 'mongoose'; 

export const CarSchema = new mongoose.Schema({
    name: String,
    dailyPrice: Number,
    monthlyPrice: Number,
    mileage: String,
    gas: String,
    gearType: String,
    thumbnailUrl: String,
})