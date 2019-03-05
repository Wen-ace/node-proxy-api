const http = require('http');
const app = require('./app');
const config = require('./config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', (req, res) => {
    let options = {
        host: config.requestHost,
        path: req.url,
        method: req.method,
        headers: req.headers
    };
    let request = (http.request(options, response => {
        res.writeHead(response.statusCode, response.headers);            // 如果不设置 这一行代码的话返回前端信息为字符串。
        response.pipe(res);
    }).on('error', () => {
        res.statusCode = 503;
        res.end(JSON.stringify({ code: 503, message: "node 服务器错误！" }));
    }));
    req.pipe(request);
});