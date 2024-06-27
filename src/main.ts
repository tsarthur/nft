import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NFT API')
    .setDescription('API для работы с NFT')
    .setVersion('1.0')
    .setContact('Петрин Артур', '@arthurpetrin', 'petrinarthur@yandex.ru')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const host = process.env.APP_HOST || 'localhost';

  app.use(cookieParser());
  app.enableCors({
    origin: [`http://${host}:3000`],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().catch((error: Error) => {
  console.error('Error during bootstrap:', error);
  process.exit(1);
});
