// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// function txtInput () {
//     output.textContent = input.value;
//     if(input.value === ""){
//         output.value = "Anonymous"
//     }
// }

// input.addEventListener("input", txtInput)

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function txtInput () {
    output.textContent = input.value;

    if (input.value === '') {
        output.textContent = "Anonymous"
    }
}

input.addEventListener("input", txtInput)