import { PartialType } from '@nestjs/mapped-types';
import { CreateMadeCrudDto } from './create-made-crud.dto';

export class UpdateMadeCrudDto extends PartialType(CreateMadeCrudDto) {}
