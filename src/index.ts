import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { todoRouter } from "./routers/todo-router";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/todo", todoRouter);

app.get("/", (req: Request, res: Response) => res.sendStatus(200));

function init(): Promise<Express> {
    return Promise.resolve(app);
}

export {
    app,
    init,
};

//app.listen(process.env.PORT, () => console.log("Listening on port " + process.env.PORT));