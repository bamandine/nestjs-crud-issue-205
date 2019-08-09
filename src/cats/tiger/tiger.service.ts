import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tiger } from './tiger.entity';
import { TigerRepository } from './tiger.repository';

@Injectable()
export class TigerService extends TypeOrmCrudService<Tiger> {
    constructor(@InjectRepository(TigerRepository) repo) {
      super(repo);
    }
}
