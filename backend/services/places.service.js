"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DB_service_1 = __importDefault(require("./DB.service"));
function query() {
    // @ts-ignore
    // const namePart: string = !!criteria.name? criteria.name : '';
    var command = "SELECT * FROM places";
    return DB_service_1.default.runSQL(command);
}
exports.default = {
    query: query,
};
