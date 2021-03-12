// Animal constructor
let Animal = function(name, food){
    this.name = name;
    this.food = food;
}
Animal.prototype.eat = function(){
    console.log(`${this.name} is eating ${this.food}`);
}

// Create a Cat Constructor, which will inherit from Animal:
// <<<<< your code start here


let Cat = function(name, food, sound) {
    Animal.call(this, name, food);
    this.sound = sound;
};

Cat.prototype = Object.create(Animal.prototype);

// Тук явно съм замзал нещо, защото не работи
Cat.prototype.myao = function() { 
    console.log(`${this.name} ${this.sound}`);
}
// >>>>> your code ends here

// create tom object:
let tom = new Cat('Tom', 'cheese', 'myao');
let pisan = new Cat('Pisan', 'fish', 'myaooo');

tom.eat();
pisan.eat();

tom.myao();
pisan.myao();



// expected output:
// Tom is eating cheese