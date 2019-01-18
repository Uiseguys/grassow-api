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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Order = class Order extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "email", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        required: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'object',
    }),
    __metadata("design:type", Object)
], Order.prototype, "details", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    __metadata("design:type", Date)
], Order.prototype, "created", void 0);
__decorate([
    repository_1.property({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Order.prototype, "completed", void 0);
Order = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Order);
exports.Order = Order;
//# sourceMappingURL=order.model.js.map