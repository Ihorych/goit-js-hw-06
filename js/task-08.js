const loginForm = document.querySelector(".login-form");
const inputEmailElem = document.querySelector("[name = email]");
const inputPassElem = document.querySelector("[name = password]");
const submitButton = document.querySelector("button");

loginForm.addEventListener("submit", onSubmitForm);
inputEmailElem.addEventListener("input", onInput);
inputPassElem.addEventListener("input", onInput);
submitButton.addEventListener("click", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData (event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`${name}: ${value}`)
    });
    event.currentTarget.reset()
}

function onInput(){
    if(inputEmailElem.value === "" || inputPassElem.value === ""){
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

function onSubmitButton() {
    if(inputEmailElem.value === "" || inputPassElem.value === ""){
        alert("Dсі поля повинні бути заповнені")
    }
};