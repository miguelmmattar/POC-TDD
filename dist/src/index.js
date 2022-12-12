import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { todoRouter } from "./routers/todo-router.js";
dotenv.config();
var app = express();
app
    .use(cors())
    .use(express.json())
    .use(todoRouter);
app.get("/", function (req, res) { return res.sendStatus(200); });
function init() {
    return Promise.resolve(app);
}
export { app, init, };
//app.listen(process.env.PORT, () => console.log("Listening on port " + process.env.PORT));
