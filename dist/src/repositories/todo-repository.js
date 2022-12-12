var list;
function populateList(todoList) {
    return list = todoList;
}
function deleteList() {
    list = undefined;
}
function getList() {
    return list;
}
function createNewItem(newItem) {
    if (list) {
        list.push(newItem);
    }
    return list;
}
export { populateList, deleteList, getList, createNewItem, };
