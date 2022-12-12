import { Router } from "express";
import * as todoController from "../controllers/todo-controller.js";
var todoRouter = Router();
todoRouter
    .get("/", todoController.getTicketTypes);
//.post("/", postBooking)
export { todoRouter };
