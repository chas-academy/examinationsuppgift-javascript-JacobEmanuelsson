
function getInfo(event) {
    
    const desc = document.getElementById("desc").value;
    const amount = document.getElementById("amount").value;


}


const buttonIncome = document.getElementById("incomeBtn");
const buttonExpense = document.getElementById("expenseBtn");


buttonIncome.addEventListener("click", function (event) {
    getInfo(event);
    addToIncome();

});
buttonExpense.addEventListener("click", function (event) {
    getInfo(event);
    addToExpense();
});


function addToIncome() {
    const addAmount = document.getElementById("amount").value;
    const desc = document.getElementById("desc").value;

    
    if (desc == "" || addAmount == "") {
        return;
    } else if (isNaN(Number(addAmount))) {
        return;
    }


    const list = document.getElementById("incomeList");


    const newItem = document.createElement("li");
    newItem.textContent = desc + " - " + addAmount + " kr (Inkomst)";

    list.appendChild(newItem);

    increaseBalance(Number(addAmount));
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
}

function addToExpense() {
    const addAmount = document.getElementById("amount").value
    const desc = document.getElementById("desc").value;
    const list = document.getElementById("expenseList")

    const newItem = document.createElement("li");
    newItem.textContent = desc + " - " + addAmount + " kr (Utgift)";

    list.appendChild(newItem);

    decreaseBalance(Number(addAmount));

    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
}

function increaseBalance(amount) {
    const balance = document.getElementById("balance")

    let tempBalance = Number(balance.textContent);

    tempBalance += amount;

    balance.textContent = tempBalance;
}

function decreaseBalance(amount) {
    const balance = document.getElementById("balance")

    let tempBalance = Number(balance.textContent);

    tempBalance -= amount;

    balance.textContent = tempBalance;
}
