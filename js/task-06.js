const  inputValue = document.querySelector("#validation-input");

function blurInput(){
    if(inputValue.dataset.length <= inputValue.value.length && inputValue.dataset.length >= inputValue.value.length){
        inputValue.classList.add("valid");
        inputValue.classList.remove("invalid");
    } else {
        inputValue.classList.remove("valid");
        inputValue.classList.add("invalid");
    }
}
inputValue.addEventListener("blur", blurInput)

