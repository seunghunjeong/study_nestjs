import { CreateMadeCrudDto } from './dto/create-made-crud.dto';
import { UpdateMadeCrudDto } from './dto/update-made-crud.dto';
export declare class MadeCrudService {
    create(createMadeCrudDto: CreateMadeCrudDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMadeCrudDto: UpdateMadeCrudDto): string;
    remove(id: number): string;
}
