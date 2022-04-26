import { Injectable } from '@nestjs/common';
import { CreateMadeCrudDto } from './dto/create-made-crud.dto';
import { UpdateMadeCrudDto } from './dto/update-made-crud.dto';

@Injectable()
export class MadeCrudService {
  create(createMadeCrudDto: CreateMadeCrudDto) {
    return 'This action adds a new madeCrud';
  }

  findAll() {
    return `This action returns all madeCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} madeCrud`;
  }

  update(id: number, updateMadeCrudDto: UpdateMadeCrudDto) {
    return `This action updates a #${id} madeCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} madeCrud`;
  }
}
