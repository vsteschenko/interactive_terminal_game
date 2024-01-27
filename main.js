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
    ['░', 'O', '░'],
    ['░', '░', '░'],
    ['░', '░', '░'],
]);

let y = 0;
let x = 0;
let position = myField.field[y][x];

let name;

//function to move down
const moveDown = () => {
    if (y + 1 < myField.field.length && myField.field[y + 1][x] === hole) {
        fallInHole();
    } else if (y + 1 < myField.field.length){
        y++;
        myField.field[y][x] = pathCharacter;
        myField.print();
    } else {
        cannotGo()
    }
};

const moveUp = () => {
    if (y - 1 >= 0 && myField.field[y-1][x] == hole){
        fallInHole()
    } else if(y - 1 >= 0){
        myField.field[y][x] = fieldCharacter;
        y--;
        myField.field[y][x] = pathCharacter;
        myField.print();
    } else {
        cannotGo()
    }
};

const moveRight = () => {
    if (myField.field[y][x + 1] === hole) {
        fallInHole();
    } else if (x + 1 < myField.field[y].length){
        x++;
        myField.field[y][x] = pathCharacter;
        myField.print();
    } else  {
        cannotGo()
    }
};

const moveLeft = () => {
    if (x - 1 >= 0 && myField.field[y][x - 1] === hole) {
        fallInHole();
    } else if (x - 1  >= 0) {
        //myField.field[y][x] = fieldCharacter;
        myField.field[y][x] = fieldCharacter;
        myField.print();
        x--;
        myField.field[y][x] = pathCharacter;
    } else {
        cannotGo()
    }
};

const fallInHole = () => {
    console.log("Oh no! You stepped into a mysterious vortex and got caught in a time warp. 🌀 Time is playing tricks on you, but don't worry, you'll find your way out eventually!");
}
const cannotGo = () => {
    console.log("You can't  go there")
}

while (position != myField.field[3][1] ){
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
    position = myField.field[y][x]
};
console.log("CONGRATULATIONS!!! <3")