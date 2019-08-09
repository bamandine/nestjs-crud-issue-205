import { Module } from '@nestjs/common';
import { TigerService } from './tiger/tiger.service';
import { TigerController } from './tiger/tiger.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tiger } from './tiger/tiger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tiger])],
  providers: [TigerService],
  controllers: [TigerController]
})
export class CatsModule {}
