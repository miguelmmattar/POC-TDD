import { faker } from "@faker-js/faker";
import { features } from "process";
import { populateList } from "../../src/repositories/todo-repository";

export function createTodoList() {
    return populateList([{
        todo: faker.lorem.sentence(),
        deadline: faker.date.future().toISOString(),
    }]);
}

export async function createEmptyTodoList() {
    return populateList([]);
}

export function createTodoItem() {
    return {
        todo: faker.lorem.sentence(),
        deadline: faker.date.future().toISOString(),
    };
}