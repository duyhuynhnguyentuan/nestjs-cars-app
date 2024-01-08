import {config} from 'dotenv'
config()

export const configs = {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/nest',
  }