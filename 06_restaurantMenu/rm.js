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
        name: "Спагети болонезе",
        price: 1.00,
    },
    main2: {
        name: "Пиле с ориз",
        price: 2.00,
    },
    main3: {
        name: "Пържола по ловджийски",
        price: 3.00,
    },
    main4: {
        name: "Мусака",
        price: 4.00,
    },
    main5: {
        name: "Леща",
        price: 5.00,
    },
};
deserts = {
    dessert1: {
        name: "Тирамису",
        price: 1.00,
    },
    dessert2: {
        name: "Домашна торта",
        price: 2.00,
    },
    dessert3: {
        name: "Френска селска торта",
        price: 3.00,
    },
    dessert4: {
        name: "Баклава",
        price: 4.00,
    },
};
function initState() {
    total = 0;
    dishList = [];
    displayTotal();
    for (i = 1; i < Object.keys(mainCourses).length + 1; i++) {
        let main = "main"+i;
        let li = document.createElement('LI');
        let textnode = document.createTextNode(`${mainCourses[main].name} - ${mainCourses[main].price.toFixed(2)} лв.`);
        li.appendChild(textnode);
        dom.mainCourses.appendChild(li); 
        li.name = mainCourses[main].name;
        li.value = mainCourses[main].price;
    };
    for (i = 1; i < Object.keys(deserts).length + 1; i++){
        let dessert = "dessert"+i;
        let li = document.createElement('LI');
        let textnode = document.createTextNode(`${deserts[dessert].name} - ${deserts[dessert].price.toFixed(2)} лв.`);
        li.appendChild(textnode);
        dom.dessetsList.appendChild(li); 
        li.name = deserts[dessert].name;
        li.value = deserts[dessert].price;
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
            total = total - e.target.value*1;
            dishName = e.target.name;
            displayTotal();
            removeFromDishList(dishName);
        } else {
            e.target.className = "checked";
            total = total + e.target.value*1;
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