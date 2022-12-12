import { Router } from "express";
import * as todoController from "../controllers/todo-controller";

const todoRouter = Router();

todoRouter
  .get("/", todoController.getList)
  .post("/", todoController.postNewItem);

export { todoRouter };