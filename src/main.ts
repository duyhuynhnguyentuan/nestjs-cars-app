import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your GraphQL endpoint
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your client's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials if needed (e.g., for cookies, authentication)
  });

  await app.listen(9000);
}
bootstrap();
