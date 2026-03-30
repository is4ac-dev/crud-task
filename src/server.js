import http from "http";

import { json } from "./middleware/json.js";
import { routes } from "./routes.js";

const server = http.createServer(async (request, response) => {
  await json(request, response);

  const route = routes.find(
    (target) => request.method === target.method && request.url === target.path,
  );

  if (route) {
    return route.handler(request, response);
  }

  response.writeHead(404).end();
});

server.listen(3000);
