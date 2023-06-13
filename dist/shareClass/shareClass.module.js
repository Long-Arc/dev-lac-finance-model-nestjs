"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareClassModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shareClass_controller_1 = require("./shareClass.controller");
const shareClass_entity_1 = require("../entities/shareClass.entity");
const shareClass_service_1 = require("./shareClass.service");
let ShareClassModule = class ShareClassModule {
};
ShareClassModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shareClass_entity_1.Dimshareclass])],
        controllers: [shareClass_controller_1.ShareClassController],
        providers: [shareClass_service_1.ShareClassService],
        exports: [shareClass_service_1.ShareClassService],
    })
], ShareClassModule);
exports.ShareClassModule = ShareClassModule;
//# sourceMappingURL=shareClass.module.js.map