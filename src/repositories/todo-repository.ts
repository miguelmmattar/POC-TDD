import { Item } from "../protocols.js";

let list: Item[]; 

function populateList(todoList: Item[]): Item[] {
    return list = todoList;
}

function deleteList() {
    list = undefined;
}

function getList() {
    return list;
}

function createNewItem(newItem: Item) {
    if(list) {
        list.push(newItem);
    }

    return list;
}

export {
    populateList,
    deleteList,
    getList,
    createNewItem,
};