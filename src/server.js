// CommonJS => require
// ESModulo => import/export

import http from "node:http";
import {json} from "./middlewares/json.js";
import {Database} from "./database.js";
import {routes} from "./routes.js";

const database = new Database()

const server = http.createServer(async (req, res) => {
    const method = req.method;

    await json(req, res)

    const route = routes.find(route => (
        route.path === req.url && route.method === method
    ))

    if (route) {
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)