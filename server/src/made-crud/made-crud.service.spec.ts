import { Test, TestingModule } from '@nestjs/testing';
import { MadeCrudService } from './made-crud.service';

describe('MadeCrudService', () => {
  let service: MadeCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MadeCrudService],
    }).compile();

    service = module.get<MadeCrudService>(MadeCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
