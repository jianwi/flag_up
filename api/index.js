const http = require("http")
const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.setHeader("Server", 'Nginx pro 2021')
    if (/num/.test(req.url)) {
        client.get('num', function (erro, data) {
            res.end(data ? data : "0")
        })
    } else if (/add/.test(req.url)) {
        client.incr('num', function (err, data) {
            console.log(data)
            res.end(data + "")
        })
    } else {
        res.statusCode = 404
        res.end("404 undefined")
    }
})

server.listen("3300", () => {
    console.log('服务器运行')
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('服务器已终止运行')
    })
})