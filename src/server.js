// CommonJS => require
// ESModulo => import/export

import http from "node:http";

const server = http.createServer((req, res) => {
    return res.end('Hello World!! funcinou?')
})

server.listen(3333)