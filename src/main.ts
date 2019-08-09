import { CrudConfigService } from '@nestjsx/crud';

CrudConfigService.load({
  query: {
      maxLimit: 200, // max accepted
      limit: 50, // by default
      cache: 2000,
  },
  params: {
      id: {
          field: 'id',
          type: 'uuid',
          primary: true,
      },
  },
  routes: {
      updateOneBase: {
          allowParamsOverride: true,
      },
      deleteOneBase: {
          returnDeleted: true,
      },
  },
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
