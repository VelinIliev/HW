let total = 0;
let dishList = [];
let dom = {
    mainCourses: document.querySelector(".mainCourses"),
    dessetsList: document.querySelector(".dessetsList"), 
    btnReset: document.querySelector(".btnReset"),
    displayResult: document.querySelector(".displayResult"),
    dishListOl: document.querySelector('.dishListOl'),
    dishes: document.querySelector('.dishes'),
};
mainCourses = [
    {
        name: "Спагети",
        price: 1.29,
    },
    {
        name: "Пиле с ориз",
        price: 2.25,
    },
    {
        name: "Пържола по ловджийски",
        price: 3.15,
    },
    {
        name: "Мусака",
        price: 4.25,
    },
    {
        name: "Леща",
        price: 5.45,
    },
];
deserts = [
    {
        name: "Тирамису",
        price: 1.28,
    },
    {
        name: "Домашна торта",
        price: 2.35,
    },
    {
        name: "Френска селска торта",
        price: 3.21,
    },
    {
        name: "Баклава",
        price: 4.35,
    },
];
function initState() {
    total = 0;
    dishList = [];
    dom.mainCourses.innerHTML = "";
    dom.dessetsList.innerHTML = "";
    displayTotal();
    dom.dishListOl.innerHTML = `<li>---- Не сте избрали нищо ----</li>`;
    for (i = 0; i < mainCourses.length; i++) {
        dom.mainCourses.innerHTML += `<li data-name='${mainCourses[i].name}' data-price=${mainCourses[i].price}>
                                      ${mainCourses[i].name} -<span> ${mainCourses[i].price.toFixed(2)}</span></li>`
    };
    for (i = 0; i < deserts.length; i++){
        dom.dessetsList.innerHTML += `<li data-name='${deserts[i].name}' data-price=${deserts[i].price}>
                                      ${deserts[i].name} -<span> ${deserts[i].price.toFixed(2)}</span></li>`
    }; 
};

function displayDishListOl() {
    for (let i = 0; i < dishList.length; i++) {
        dom.dishListOl.innerHTML += `<li>${dishList[i]}</li>`
    }
};
function displayTotal(){
    dom.displayResult.innerHTML = `Вашата сметка: ${total.toFixed(2)} лв.`;
};
function addToDishList(dishName){
    dishList.push(dishName);
    dom.dishListOl.innerHTML = "";
    displayDishListOl();
};
function removeFromDishList(dishName){
    let position = dishList.indexOf(dishName);
    dishList.splice(position, 1);
    dom.dishListOl.innerHTML = "";
    displayDishListOl();  
};
initState();
dom.dishes.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        if (e.target.className === "checked"){
            e.target.className = "";
            total = total - e.target.dataset.price*1;
            dishName = e.target.dataset.name;
            displayTotal();
            removeFromDishList(dishName);
        } else {
            e.target.className = "checked";
            total = total + e.target.dataset.price*1;
            dishName = e.target.dataset.name;
            displayTotal();
            addToDishList(dishName);
        }
    } else if(e.target.tagName === "SPAN"){
        if (e.target.parentElement.className === "checked"){
            e.target.parentElement.className = "";
            total = total - e.target.parentElement.dataset.price*1;
            dishName = e.target.parentElement.dataset.name;
            displayTotal();
            removeFromDishList(dishName);
        } else {
            e.target.parentElement.className = "checked";
            total = total + e.target.parentElement.dataset.price*1;
            dishName = e.target.parentElement.dataset.name;
            displayTotal();
            addToDishList(dishName);
        }
    }
});
dom.btnReset.addEventListener('click', function(){
    
    initState();
});