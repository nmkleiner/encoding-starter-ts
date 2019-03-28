"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DB_service_1 = __importDefault(require("./DB.service"));
function query(filter) {
    console.log('filter', filter);
    filter = filter === undefined ? '' : filter;
    var command = "SELECT * FROM places WHERE title LIKE '%" + filter + "%' or description like '%" + filter + "%'";
    return DB_service_1.default.runSQL(command);
}
exports.default = {
    query: query,
};
