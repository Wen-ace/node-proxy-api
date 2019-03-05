const app = require('./app');
const config = require('./config');

// 调用 proxy 模块
require('./proxy');

let port = config.port || process.env.port || 8080;
app.listen(port, config.host, () => {
    console.log(`app listenning on http://${config.host}:${port}`);
})
