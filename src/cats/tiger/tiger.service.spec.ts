import { Test, TestingModule } from '@nestjs/testing';
import { TigerService } from './tiger.service';

describe('TigerService', () => {
  let service: TigerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TigerService],
    }).compile();

    service = module.get<TigerService>(TigerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
