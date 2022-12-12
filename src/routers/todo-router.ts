import { Router } from "express";
import * as todoController from "../controllers/todo-controller.js"

const todoRouter = Router();

todoRouter
  .get("/", todoController.getTicketTypes);
  //.post("/", postBooking)

export { todoRouter };