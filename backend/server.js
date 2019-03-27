"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_session_1 = __importDefault(require("express-session"));
var JWT_service_1 = __importDefault(require("./keys/JWT.service"));
require("./models/Place");
require("./models/Area");
require("./models/Device");
require("./models/Target");
require("./models/User");
// Load routes
var places_1 = __importDefault(require("./routes/places"));
var areas_1 = __importDefault(require("./routes/areas"));
var devices_1 = __importDefault(require("./routes/devices"));
var targets_1 = __importDefault(require("./routes/targets"));
var users_1 = __importDefault(require("./routes/users"));
// Map Global Promises
mongoose_1.default.Promise = global.Promise;
// Connect radar
mongoose_1.default.connect('mongodb://noam:Nmkl9634@ds139295.mlab.com:39295/radar-compie', { useNewUrlParser: true })
    .then(function () { return console.log('Mongo connected'); })
    .catch(function (err) { return console.error(err); });
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(express_session_1.default({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(JWT_service_1.default.middleware);
// Use routes
app.use('/places', places_1.default);
app.use('/areas', areas_1.default);
app.use('/devices', devices_1.default);
app.use('/targets', targets_1.default);
app.use('/users', users_1.default);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('server started on port ', port);
});
