import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [
    DatabaseModule,
    PropertyModule,
    CatsModule,
  ],
})
export class AppModule {}
