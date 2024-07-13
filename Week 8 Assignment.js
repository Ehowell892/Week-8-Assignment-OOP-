class Child {
    constructor() {
        this.text = '';
    }
    getValue() {
        this.text = prompt('What is the value?');
    }
}
class Parent {
    constructor() {
        this.items = [];////
    }
    displayMenu() {
        return prompt('1. Create 2. View 3. Delete 0. Cancel');
    }
    create() {
        let child = new Child();
        child.getValue();
        this.items.push(child);
    }
    view() {
        let itemString = '';
        for (let i = 0; i < this.items.length; i++) {
            itemString += i + ') ' + this.items[i].text + '\n';
        }
        alert(itemString);
    }
    delete() {
        let index = prompt('Enter item to delete:');
        if (index > -1 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }
    start() {
        let selection = this.displayMenu();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.create();
                    break;
                case '2':
                    this.view();
                    break;
                case '3':
                    this.delete();
                    break;
                default:
                    selection = 0;
            }
            selection = this.displayMenu();
        }
    }
}
let master = new Parent();
master.start();
