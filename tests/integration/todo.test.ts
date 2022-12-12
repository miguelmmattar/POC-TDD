import { app, init } from "../../src/index";
import { deleteList } from "../../src/repositories/todo-repository";
import { createTodoList, createEmptyTodoList, createTodoItem } from "../factories/todo-factory";
import httpStatus from "http-status";
import supertest from "supertest";

beforeAll(async () => {
    await init();
})

beforeEach(() => {
    deleteList(); 
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

    it("should respond with status 200 and existing todoList data when there are items on the list", async () => {
        const list = createTodoList();
        
        const response = await server.get("/todo");
        
        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([{
            todo: list[0].todo,
            deadline: list[0].deadline,
        }]);
    });
});

describe("POST /todo", () => {
    it("should respond with status 400 if no body is passed", async () => {
        const response = await server.post("/todo");

        expect(response.status).toEqual(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 404 if list doesnt exist", async () => {
        const newItem = createTodoItem();
        
        const response = await server.post("/todo").send(newItem);
    
        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it("should respond with status 201 and correct todoList data", async () => {
        const newItem = createTodoItem();
        createEmptyTodoList();
        const response = await server.post("/todo").send(newItem);
    
        expect(response.status).toBe(httpStatus.CREATED);
        expect(response.body).toEqual([{
            todo: newItem.todo,
            deadline: newItem.deadline,
        }]);
    });
});