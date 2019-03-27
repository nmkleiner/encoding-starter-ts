"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '770770',
    database: 'radar_db',
    insecureAuth: true,
});
connection.connect(function (err) {
    if (err) {
        throw new Error('mySql failed connection');
    }
    console.log('connected to SQL server');
});
function runSQL(query) {
    return new Promise(function (resolve, reject) {
        connection.query(query, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
            // // not entirely clear on whether connection.end() should be called here or not.
            // // Leaning towards not.
            // connection.end();
        });
    });
}
exports.default = {
    runSQL: runSQL,
};
