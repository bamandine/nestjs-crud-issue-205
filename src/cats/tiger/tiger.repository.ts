import { EntityRepository, Repository } from 'typeorm';
import { Tiger } from './tiger.entity';

@EntityRepository(Tiger)
export class TigerRepository extends Repository<Tiger> {}
