"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMadeCrudDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_made_crud_dto_1 = require("./create-made-crud.dto");
class UpdateMadeCrudDto extends (0, mapped_types_1.PartialType)(create_made_crud_dto_1.CreateMadeCrudDto) {
}
exports.UpdateMadeCrudDto = UpdateMadeCrudDto;
//# sourceMappingURL=update-made-crud.dto.js.map