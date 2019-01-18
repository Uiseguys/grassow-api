"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
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
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("./repositories");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let MySequence = class MySequence {
    constructor(ctx, findRoute, parseParams, invoke, send, reject, logsRepository, authenticateRequest) {
        this.ctx = ctx;
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.logsRepository = logsRepository;
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        var sendDate = (new Date()).getTime();
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            if (!(route instanceof rest_1.StaticAssetsRoute)) {
                await this.authenticateRequest(request);
            }
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            var recieveDate = (new Date()).getTime();
            var responseTimeMs = recieveDate - sendDate;
            let createjson = {
                id: Math.floor(1000 + Math.random() * 9000),
                hostname: request.hostname,
                url: request.url,
                APIResponseTime: { responsetime: responseTimeMs },
                OverallResponseTime: responseTimeMs.toString(),
                msg: "",
                time: new Date()
            };
            this.logsRepository.create(createjson);
            this.send(response, result);
        }
        catch (error) {
            this.reject(context, error);
        }
    }
};
MySequence = __decorate([
    __param(0, context_1.inject(rest_1.RestBindings.Http.CONTEXT)),
    __param(1, context_1.inject(SequenceActions.FIND_ROUTE)),
    __param(2, context_1.inject(SequenceActions.PARSE_PARAMS)),
    __param(3, context_1.inject(SequenceActions.INVOKE_METHOD)),
    __param(4, context_1.inject(SequenceActions.SEND)),
    __param(5, context_1.inject(SequenceActions.REJECT)),
    __param(6, repository_1.repository(repositories_1.LogsRepository)),
    __param(7, context_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    __metadata("design:paramtypes", [context_1.Context, Function, Function, Function, Function, Function, repositories_1.LogsRepository, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map