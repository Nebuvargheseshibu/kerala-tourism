let lemail = document.getElementById("email");
let lemailerror = document.getElementById("emailerror");

let loginpwd = document.getElementById("loginpwd");
let loginpwderror = document.getElementById("loginpwderror");

let username = document.getElementById("username");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let usernameerror = document.getElementById("usernameerror");
let phoneerror = document.getElementById("phoneerror");
let emailerror = document.getElementById("emailerror");
let pwderror = document.getElementById("pwderror");
let error = document.getElementsByClassName("error")
let strengthbar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

// login page

function validateEmail(){
    let regexpemail = /^([A-Za-z0-9_\-\.]{3,})@([A-Za-z]{3,})\.([A-Za-z]{2,5})(\.[A-Za-z]{2,5})?$/;

    if(regexpemail.test(lemail.value)){
        lemailerror.innerHTML = "Valid";
        lemailerror.style.color = "Green";
        lemail.style.border = "2px solid Green";
        return true;
    }else if(lemail.value.trim() == ""){
        lemailerror.innerHTML = "Email field is empty";
        lemailerror.style.color = "Red";
        lemail.style.border = "1px solid Red";
        return false;
    }else{
        lemailerror.innerHTML = "Invalid email";
        lemailerror.style.color = "Red";
        lemail.style.border = "1px solid Red";
        return false;
    }
}

function loginValidatepwd(){

    let regloginpwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (regloginpwd.test(loginpwd.value)) {
        loginpwderror.innerHTML = "";
        return true;
      }
      else if (loginpwd.value.trim() == "") {
        loginpwderror.innerHTML = "Not a valid password";
        loginpwderror.style.color = "Red";
        loginpwd.style.border = "2px solid red";
        return false;
      }
       else {
        return false;
      }
}

// login

// signup

function validateName() {
  
    let regexpname = /^([a-zA-Z ]{3,})$/;
  
    if (regexpname.test(username.value)) {
      usernameerror.innerHTML = "Valid";
      usernameerror.style.color = "Green";
      username.style.border = "2px solid green";
      return true;
    } else if (username.value.trim() == "") {
      usernameerror.innerHTML = "Name field is empty";
      usernameerror.style.color = "Red";
      username.style.border = "2px solid red";
      return false;
    } else {
      usernameerror.innerHTML = "Invalid name";
      usernameerror.style.color = "Red";
      username.style.border = "2px solid red";
      return false;
    }
  }
    function validatePhone(){
  
      let regexpphone = /^[789][0-9]{9}$/;
  
    if (regexpphone.test(phone.value)) {
      phoneerror.innerHTML = "Valid";
      phoneerror.style.color = "Green";
      phone.style.border = "2px solid green";
      return true;
    } else if (phone.value.trim() == "") {
      phoneerror.innerHTML = "Phone no. field is empty";
      phoneerror.style.color = "Red";
      phone.style.border = "2px solid red";
      return false;
    } else {
      phoneerror.innerHTML = "Invalid Phone no.";
      phoneerror.style.color = "Red";
      phone.style.border = "2px solid red";
      return false;
    }
  }
  
  function validateEmail(){
  
    let regexpemail =
    /^([A-Za-z0-9_\-\.]{3,})@([A-Za-z]{3,})\.([A-Za-z]{2,5})(\.[A-za-z]{2,5})?$/;
  
    if (regexpemail.test(email.value)) {
      emailerror.innerHTML = "Valid";
      emailerror.style.color = "Green";
      email.style.border = "2px solid Green";
      return true;
    } else if (email.value.trim() == "") {
      emailerror.innerHTML = "Email field is empty";
      emailerror.style.color = "Red";
      email.style.border = "2px solid red";
      return false;
    } else {
      emailerror.innerHTML = "Invalid email";
      emailerror.style.color = "Red";
      email.style.border = "2px solid red";
      return false;
    }
  
  }
  
  
  function validatepwd(){
  
    let regexppwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,16}$/;
  
    if (regexppwd.test(pwd.value)) {
      pwderror.innerHTML = "Valid";
      pwderror.style.color = "green";
      pwd.style.border = "2px solid green";
      return true;
    } else if (pwd.value.trim() == "") {
      pwderror.innerHTML = "Password field is empty";
      pwderror.style.color = "Red";
      pwd.style.border = "2px solid red";
      return false;
    } else {
      pwderror.innerHTML = "Invalid Password";
      pwderror.style.color = "Red";
      pwd.style.border = "2px solid red";
      return false;
    }
  
  }
  
  function strength(){
      let regweak=/^[a-zA-Z]{0,}$/
      let regmed = /^[a-zA-Z0-9]{3,}$/
      let regstrong = /^[a-zA-Z0-9!@#$%^&*]{6,}$/
    
      if(regweak.test(pwd.value)){
      
        msg.innerHTML = "Weak Password";
        msg.style.color = "Red"
        strengthbar.style.backgroundColor = "Red";
      }
    
      else if(regmed.test(pwd.value)){
        msg.innerHTML = "Medium Password"
        msg.style.color= "Orange"
        strengthbar.style.backgroundColor="Orange";
      }
    
      else if(regstrong.test(pwd.value)){
        msg.innerHTML = "Strong Password"
        msg.style.color = "Green"
        strengthbar.style.backgroundColor="Green";
      }
    
    }
  
  function validate(){
  
    if ((validateName()==true)&&(validateEmail()==true)&&(validatePhone()==true)&&(validatepwd()==true)) {
      alert("Form submitted successfully!")
      location.reload();
    }
    else {
      alert("Form not submitted, please check the empty fields!!")
    }
  }