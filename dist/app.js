"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import * as bodyParser from 'body-parser';
const app = express_1.default();
exports.app = app;
// app.use(bodyParser.());
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// app.use(bodyParser.text());
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/api/v1/parse', (request, response) => {
    const result = request.body.data.split('0000');
    response.status(200).send({
        statusCode: 200,
        data: {
            firstName: result[0] + '0000',
            lastName: result[1].split('000')[0] + '000',
            clientId: result[1].split('000')[1]
        }
    });
});
app.post('/api/v2/parse', (request, response) => {
    const result = request.body.data.split('0000');
    response.status(200).send({
        statusCode: 200,
        data: {
            firstName: result[0],
            lastName: result[1].split('000')[0],
            clientId: result[1].split('000')[1].split(999)
        }
    });
});
//# sourceMappingURL=app.js.map