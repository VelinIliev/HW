let total = 0;
let dishList = [];
let dom = {
    mainCourses: document.querySelector(".mainCourses"),
    dessetsList: document.querySelector(".dessetsList"), 
    btnTotal: document.querySelector(".btnTotal"),
    btnReset: document.querySelector(".btnReset"),
    container: document.querySelector(".container"),
    displayResult: document.querySelector(".displayResult"),
    dishListOl: document.querySelector('.dishListOl'),
    dishes: document.querySelector('.dishes'),
};
mainCourses = {
    main1: {
        name: "Спагети",
        price: 1.29,
    },
    main2: {
        name: "Пиле с ориз",
        price: 2.25,
    },
    main3: {
        name: "Пържола по ловджийски",
        price: 3.15,
    },
    main4: {
        name: "Мусака",
        price: 4.25,
    },
    main5: {
        name: "Леща",
        price: 5.45,
    },
};
deserts = {
    dessert1: {
        name: "Тирамису",
        price: 1.28,
    },
    dessert2: {
        name: "Домашна торта",
        price: 2.35,
    },
    dessert3: {
        name: "Френска селска торта",
        price: 3.21,
    },
    dessert4: {
        name: "Баклава",
        price: 4.35,
    },
};
function initState() {
    total = 0;
    dishList = [];
    displayTotal();
    for (i = 1; i < Object.keys(mainCourses).length + 1; i++) {
        let main = "main"+i;
        let li = document.createElement('LI');
        let textnode = document.createTextNode(`${mainCourses[main].name} - `);
        li.appendChild(textnode);
        dom.mainCourses.appendChild(li); 
        li.name = mainCourses[main].name;
        let span = document.createElement('SPAN');
        let textnodeSpan = document.createTextNode(`${mainCourses[main].price.toFixed(2)}`);
        span.appendChild(textnodeSpan);
        li.appendChild(span);
    };
    for (i = 1; i < Object.keys(deserts).length + 1; i++){
        let dessert = "dessert"+i;
        let li = document.createElement('LI');
        let textnode = document.createTextNode(`${deserts[dessert].name} - `);
        li.appendChild(textnode);
        dom.dessetsList.appendChild(li); 
        li.name = deserts[dessert].name;
        let span = document.createElement('SPAN');
        let textnodeSpan = document.createTextNode(`${deserts[dessert].price.toFixed(2)}`);
        span.appendChild(textnodeSpan);
        li.appendChild(span);
    }; 
};
function removeChilds() {
    for (i = 0; i < Object.keys(mainCourses).length; i++){
        dom.mainCourses.removeChild(dom.mainCourses.lastChild);
    };
    for (i = 0; i < Object.keys(deserts).length; i++){
        dom.dessetsList.removeChild(dom.dessetsList.lastChild);
    };
};
function removeDishListOlChilds(){
    dom.dishListOl.innerHTML = "";
};
function displayDishListOl() {
    for (let i = 0; i < dishList.length; i++) {
        let li = document.createElement('LI');
        let textnode = document.createTextNode(`${dishList[i]}`);
        li.appendChild(textnode);
        dom.dishListOl.appendChild(li); 
    }
};
function displayTotal(){
    dom.displayResult.innerHTML = `Вашата сметка: ${total.toFixed(2)} лв.`;
};
function addToDishList(dishName){
    dishList.push(dishName);
    removeDishListOlChilds()
    displayDishListOl();
};
function removeFromDishList(dishName){
    let position = dishList.indexOf(dishName);
    dishList.splice(position, 1);
    removeDishListOlChilds()
    displayDishListOl();  
};
initState();
dom.dishes.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if (e.target.className === "checked"){
            e.target.className = "";
            total = total - e.target.querySelector('SPAN').innerText*1;
            dishName = e.target.name;
            displayTotal();
            removeFromDishList(dishName);
        } else {
            e.target.className = "checked";
            total = total + e.target.querySelector('SPAN').innerText*1;
            dishName = e.target.name;
            displayTotal();
            addToDishList(dishName);
        }
    }
});
dom.btnReset.addEventListener('click', function(){
    removeChilds();
    initState();
    removeDishListOlChilds();
});