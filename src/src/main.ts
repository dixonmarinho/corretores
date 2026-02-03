import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1. Importe estas duas linhas
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Agent Flow API') // Nome do seu projeto
    .setDescription('Documentação da API do Agent Flow')
    .setVersion('1.0')

    .addTag('Agencies', 'Endpoints relacionados a agências')

    .build();

  const document = SwaggerModule.createDocument(app, config);

  // A rota será: http://localhost:3000/api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
