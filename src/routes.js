import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler(request, response) {
      const task = {
        id: randomUUID(),
        title: "Atualização Windows",
        description: "Atualizar o OS de Windows 10 para Windows 11",
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
