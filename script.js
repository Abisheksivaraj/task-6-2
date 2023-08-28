"use script";

const formEle = document.getElementById("form")

const nameEl = document.getElementById("username")

const mailEl = document.getElementById("email")

const passwordEl = document.getElementById("password")

const checkEl = document.getElementById("check")

// error validation
const nameInputForm = document.getElementById('username-input-field')

const emailInputForm = document.getElementById('email-input-field')

const passwordInputForm = document.getElementById('password-input-field')

const confirmPasswordInputForm = document.getElementById('confirm-pass-input-field');

// error msg
const emailErrMsg = document.getElementById('email-error');

const passwordErrorMsg = document.getElementById('password-error');

const confirmPasswordErrorMsg = document.getElementById('check-password-error');

// gv
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// function
const checkValidation = ()=>{
  // username validation
  if(nameEl.value){
    if(nameInputForm.classList.contains('fail')){
      nameInputForm.classList.remove('fail')
    }
    nameInputForm.classList.add('success')
  }else if(nameEl.value == ""){
    if(nameInputForm.classList.contains('success')){
      nameInputForm.classList.remove('success')
    }
    nameInputForm.classList.add('fail')
  }
  // email validation
  if(mailEl.value){
    if(!(mailEl.value.match(pattern))){
      emailErrMsg.classList.add('fail');
      emailErrMsg.innerHTML = `Enter a Valid Email!`;
    }else{
      emailInputForm.classList.contains('fail') ? emailInputForm.classList.remove('fail') : emailInputForm.classList.add('success');
    }
  }else if(mailEl.value == ''){
    emailErrMsg.classList.add('fail');
    emailErrMsg.innerHTML = `Email cannot be empty`;
  }
}

// event listeners
formEle.addEventListener("submit",(event)=>{
  event.preventDefault();
  checkValidation();
})