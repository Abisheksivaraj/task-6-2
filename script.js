"use script";

const formEel = document.getElementById("form")

const nameEl = document.getElementById("username")

const mailEl = document.getElementById("email")

const passwordEl = document.getElementById("password")

const checkEl = document.getElementById("check")


function checkRequired(inputs){
  inputs.forEach((input) => {
    if(input.value.trim() === "") {
      errorInput(input, "enter the required text")
    }else{
      successInput(input);
    }
  });
}

function errorInput(input, message){}

function successInput(input) {
  const inputForm = input.parentElement;

  inputForm.className = "input-form success";

  const i = inputForm.querySelector("i");

  i.innerHTML = "";
}


Form.addEventListner("submit", function(e){

  e.preventDefault();
  checkRequired([nameEl, mailEl, passwordEl, checkEl]);

})