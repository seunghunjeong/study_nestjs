import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MadeCrudService } from './made-crud.service';
import { CreateMadeCrudDto } from './dto/create-made-crud.dto';
import { UpdateMadeCrudDto } from './dto/update-made-crud.dto';

@Controller('made-crud')
export class MadeCrudController {
  constructor(private readonly madeCrudService: MadeCrudService) {}

  @Post()
  create(@Body() createMadeCrudDto: CreateMadeCrudDto) {
    return this.madeCrudService.create(createMadeCrudDto);
  }

  @Get()
  findAll() {
    return this.madeCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.madeCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMadeCrudDto: UpdateMadeCrudDto) {
    return this.madeCrudService.update(+id, updateMadeCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.madeCrudService.remove(+id);
  }
}
