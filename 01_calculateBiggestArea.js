// Represent the data, about 5 rectangles with next properties:

// id: r1, width: 40, height: 20
// id: r2, width: 30, height: 30
// id: r3, width: 10, height: 80
// id: r4, width: 90, height: 2
// id: r5, width: 20, height: 20  

// Write a function which will return the id of the rectangle with biggest area.

// Expected output: r2  

class RectangleClass{
    constructor(id, width, height ){
        this.id = id;
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.width*this.height; 
    }
}
let r1 = new RectangleClass("r1", 40, 20);
let r2 = new RectangleClass("r2", 30, 30);
let r3 = new RectangleClass("r3", 10, 80);
let r4 = new RectangleClass("r4", 90, 2);
let r5 = new RectangleClass("r5", 20, 20);
// console.log(r1, r2, r3, r4, r5);

function calcBiggestArea() {
    let biggestArea = 0;
    let id;
    for (let i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        if (biggestArea < arguments[i].calcArea()) {
            biggestArea = arguments[i].calcArea();
            // console.log(arguments[i].calcArea());
            id = arguments[i].id;
        }
    }
    return (id)    
}
console.log(`The id of biggest rectangle is: ${calcBiggestArea(r1, r2, r3, r4, r5)}`);