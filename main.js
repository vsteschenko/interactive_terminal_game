const prompt = require('prompt-sync')({sigint: true});
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor() {
        this.yHat = Math.floor(Math.random() * 6);
        this.xHat = Math.floor(Math.random() * 3);
        this.field = this.generateField();
    }
    print() {
        for (let i = 0; i < myField.field.length; i++) {
            console.log(myField.field[i].join())
        };
    }
    generateField() {
        let field = [];
        for (let i = 0; i <= 5; i++) {
            let line = [];
            for (let  x = 0; x <= 2; x++) {
                let p = 0.3;
                let probability = Math.random() + 0.13;
                if(p >  probability) {
                    line.push(hole)
                } else {
                    line.push(fieldCharacter)
                }
            }
            field.push(line)
        }
        field[this.yHat][this.xHat] = hat;
        return field
    }
};

const myField = new Field()

let y = 0;
let x = 0;
let position = myField.field[y][x];

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

myField.print();
while (position != myField.field[myField.yHat][myField.xHat] ){
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
