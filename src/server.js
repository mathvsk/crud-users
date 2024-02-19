// CommonJS => require
// ESModulo => import/export

import http from "node:http";
import buffer from "node:buffer";

const users = []

const server = http.createServer(async (req, res) => {
    const method = req.method;

    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch {
        req.body = {};
    }

    if (method === "GET" && req.url === "/users") {
        return res.setHeader("Content-Type", "application/json").end(JSON.stringify(users));
    }

    if (method === "POST" && req.url === "/users") {
        const { name, email } = req.body

        users.push({
            id: 1,
            name,
            email,
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)