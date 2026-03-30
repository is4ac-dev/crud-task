import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler(request, response) {
      const { title, description } = request.body;

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: null,
      };

      database.insert("tasks", task);

      response
        .writeHead(201, { "Content-type": "application/json " })
        .end(JSON.stringify(task));
    },
  },
];
