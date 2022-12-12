import { app, init } from "../../src/index.js";
import { deleteAllItems } from "../../src/repositories/todo-repository.js";
import { createTodoList, createEmptyTodoList } from "../factories/todo-factory.js";
import httpStatus from "http-status";
import supertest from "supertest";

beforeAll(async () => {
    await init();
})

beforeEach(() => {
    deleteAllItems(); 
});

const server = supertest(app);

describe("GET /todo", () => {
    it("should respond with status 404 if list doesnt exist", async () => {
        const response = await server.get("/todo");
    
        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it("should respond with status 200 and empty array when there are no items on the list", async () => {
        createEmptyTodoList();
        
        const response = await server.get("/todo");
        
        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([]);
    });

    it("should respond with status 200 and existing todoList data when there are no items on the list", async () => {
        const list = createTodoList();
        
        const response = await server.get("/todo");
        
        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([{
            todo: list[0].todo,
            deadline: list[0].deadline,
        }]);
    });
})