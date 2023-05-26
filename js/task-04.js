let counterValue = 0;

const plusButton = document.querySelector("div#counter button[data-action=increment]");
const minusButton = document.querySelector("div#counter button[data-action=decrement]");

const value = document.querySelector("#value");

function plusClick() {
    counterValue += 1;
    value.textContent = counterValue;
}

function minusClick() {
    counterValue -= 1;
    value.textContent = counterValue;
}

plusButton.addEventListener("click", plusClick);
minusButton.addEventListener("click", minusClick);

