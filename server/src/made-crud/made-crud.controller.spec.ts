import { Test, TestingModule } from '@nestjs/testing';
import { MadeCrudController } from './made-crud.controller';
import { MadeCrudService } from './made-crud.service';

describe('MadeCrudController', () => {
  let controller: MadeCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MadeCrudController],
      providers: [MadeCrudService],
    }).compile();

    controller = module.get<MadeCrudController>(MadeCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
