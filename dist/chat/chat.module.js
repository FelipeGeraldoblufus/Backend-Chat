"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gateway_sala1_1 = require("./chat/chat.gateway.sala1");
const auth_module_1 = require("../auth/auth.module");
const chat_gateway_sala2_1 = require("./chat/chat.gateway.sala2");
const chat_gateway_sala3_1 = require("./chat/chat.gateway.sala3");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        providers: [chat_gateway_sala1_1.ChatGatewaySala1, chat_gateway_sala2_1.ChatGatewaySala2, chat_gateway_sala3_1.ChatGatewaySala3]
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map