import { Test, TestingModule } from '@nestjs/testing';
import { MadeCController } from './made-c.controller';

describe('MadeCController', () => {
  let controller: MadeCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MadeCController],
    }).compile();

    controller = module.get<MadeCController>(MadeCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
