import { Module } from '@nestjs/common';
import { MadeCrudService } from './made-crud.service';
import { MadeCrudController } from './made-crud.controller';

@Module({
  controllers: [MadeCrudController],
  providers: [MadeCrudService]
})
export class MadeCrudModule {}
