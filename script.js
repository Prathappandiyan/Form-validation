const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

///function for email validation
String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

///alpha for username input
String.prototype.isAlpha=function(){
    return !!this.match(/^[a-zA-Z]*$/);
};

////below for empty input box
function checkrequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim()===""){
            errorinput(input,`${getname(input)} is Required`);

        }
        else{
            successinput(input);

        }
    });
}

function getname(input){
    ///return input.id;
    return input.getAttribute("data-name")

}
////class adding in html
function errorinput(input,message){
    const formgroup=input.parentElement;
    formgroup.className="form-group error";
    const p=formgroup.querySelector("p");
    p.innerHTML=message;
}
function successinput(input){
    const formgroup=input.parentElement;
    formgroup.className="form-group success";
    const p=formgroup.querySelector("p");
    p.innerHTML="";
}

///username verifying
function checklength(input,min,max){
    const data=input.value.trim().length
    if(data<min){
        errorinput(input,`${getname(input)} must be atleast greater than ${min} charachters`)

    }
    else if(data>max){
        errorinput(input,`${getname(input)} must be atleast lesser than ${max} charachters`)
    }
    else{
        successinput(input);
    }
}
///for password checking
function checkconfirmpassword(password,password2){
    if(password.value!=password2.value){
        errorinput(password2,`${getname(password2)} does not match`)
    }

}
///email error message
function checkemail(input){
    if(!input.value.trim().isEmail()){
        errorinput(input,"This is not an valid email address")

    }
}

////checking alpha username error message
function checkAlpha(input){
    if(!input.value.isAlpha()){
        errorinput(input,`${getname(input)} Must be Alphabets`)
    }
}

///submit event
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkrequired([username,email,password,password2])
    checklength(username,3,10)
    checklength(password,5,10)
    checkconfirmpassword(password,password2);
    checkemail(email)
    checkAlpha(username)
})




