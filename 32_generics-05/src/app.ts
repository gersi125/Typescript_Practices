// Generic Classes
class DataStorage<T extends number | boolean | string | object > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item))
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Ajkana');
textStorage.addItem('Llaveshi');
textStorage.removeItem('Llaveshi');
console.log(textStorage.getItems());


const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Gersi', surname: 'Veshi'});
objStorage.addItem({name: 'Ajkana', age: 28});

console.log(objStorage.getItems());
