import { Item } from "../protocols.js";

let list : Item[];

function populateList(todoList: Item[]): Item[] {
    return list = todoList;
}

function deleteAllItems() {
    list = [];
}

function getList() {
    return list;
}

export {
    populateList,
    deleteAllItems,
    getList,
};