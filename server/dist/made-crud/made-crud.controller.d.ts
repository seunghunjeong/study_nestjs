import { MadeCrudService } from './made-crud.service';
import { CreateMadeCrudDto } from './dto/create-made-crud.dto';
import { UpdateMadeCrudDto } from './dto/update-made-crud.dto';
export declare class MadeCrudController {
    private readonly madeCrudService;
    constructor(madeCrudService: MadeCrudService);
    create(createMadeCrudDto: CreateMadeCrudDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMadeCrudDto: UpdateMadeCrudDto): string;
    remove(id: string): string;
}
