const prompt = require('prompt-sync')({sigint: true});
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr) {
        this.field = arr;
    }
    print() {
        for (let i = 0; i < myField.field.length; i++) {
            console.log(myField.field[i].join())
        };
    }
};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
    ['░', '░', '░'],
    ['░', '░', '░'],
    ['░', '░', '░'],
    ['░', '░', '░'],
]);

let y = 0;
let x = 0;
let position = myField.field[y][x];

let name;

//function to move down
const moveDown = () => {
    y++;
    myField.field[y][x] = pathCharacter;
    myField.print();
};

const moveUp = () => {
    myField.field[y][x] = fieldCharacter;
    y--;
    myField.field[y][x] = pathCharacter;
    myField.print();
};

const moveRight = () => {
    x++;
    myField.field[y][x] = pathCharacter;
    myField.print();
};

const moveLeft = () => {
    myField.field[y][x] = fieldCharacter;
    x--;
    myField.field[y][x] = pathCharacter;
    myField.print();
};

while (position != myField.field[3][1]){
    let name = prompt("Which direction would you like to move?");
    if (name == 's'){
        moveDown();
    } else if (name == 'w'){
        moveUp();
    } else if (name == 'd'){
        moveRight();
    } else if (name == 'a'){
        moveLeft();
    }
};