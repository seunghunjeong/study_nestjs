"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MadeCrudController = void 0;
const common_1 = require("@nestjs/common");
const made_crud_service_1 = require("./made-crud.service");
const create_made_crud_dto_1 = require("./dto/create-made-crud.dto");
const update_made_crud_dto_1 = require("./dto/update-made-crud.dto");
let MadeCrudController = class MadeCrudController {
    constructor(madeCrudService) {
        this.madeCrudService = madeCrudService;
    }
    create(createMadeCrudDto) {
        return this.madeCrudService.create(createMadeCrudDto);
    }
    findAll() {
        return this.madeCrudService.findAll();
    }
    findOne(id) {
        return this.madeCrudService.findOne(+id);
    }
    update(id, updateMadeCrudDto) {
        return this.madeCrudService.update(+id, updateMadeCrudDto);
    }
    remove(id) {
        return this.madeCrudService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_made_crud_dto_1.CreateMadeCrudDto]),
    __metadata("design:returntype", void 0)
], MadeCrudController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MadeCrudController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MadeCrudController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_made_crud_dto_1.UpdateMadeCrudDto]),
    __metadata("design:returntype", void 0)
], MadeCrudController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MadeCrudController.prototype, "remove", null);
MadeCrudController = __decorate([
    (0, common_1.Controller)('made-crud'),
    __metadata("design:paramtypes", [made_crud_service_1.MadeCrudService])
], MadeCrudController);
exports.MadeCrudController = MadeCrudController;
//# sourceMappingURL=made-crud.controller.js.map