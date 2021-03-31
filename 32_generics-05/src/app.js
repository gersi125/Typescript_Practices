// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item))
            this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Ajkana');
textStorage.addItem('Llaveshi');
textStorage.removeItem('Llaveshi');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: 'Gersi', surname: 'Veshi' });
objStorage.addItem({ name: 'Ajkana', age: 28 });
console.log(objStorage.getItems());
