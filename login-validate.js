var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "root" && password == "root123"){
    alert ("Login successfully");
    return false;
    }
else{
    alert("Username or Password is incorrect. Please try again!");
    }
}

let userlist = {
    username: "",
    password: "",
    nameofuser: "",
    email: "",
    address: ""
}

let Signup = document.getElementById("signupbutton");

let uname = document.getElementById("addUsername");
let psword = document.getElementById("addPassword");
let name = document.getElementById("addName");
let phone = document.getElementById("addPhone");
let mail = document.getElementById("addMail");
let addr = document.getElementById("addAddress");

function getUserData() {
    let userlist = {
        username: uname.value,
        password: psword.value,
        nameofuser: name.value,
        phonenumber: phone.value,
        email: mail.value,
        address: addr.value
    }
    return userlist;
}

function saveUser(userlist) {
    islocalStorageExist();
    let oldUserList = JSON.parse(localStorage.getItem("userList"));
    // [{},{}]
    oldUserList.push(userlist)
    let newUserList = oldUserList;
    localStorage.setItem("userList", JSON.stringify(newUserList))
}

function islocalStorageExist() {
    if (localStorage.getItem("userList") == null) {
        localStorage.setItem("userList", JSON.stringify([]))
    }
}

islocalStorageExist();


var uname2 = document.getElementById("addUsername").value;
var psword2 = document.getElementById("addPassword").value;
var rppsword2 = document.getElementById("addRpPassword").value;
var name2 = document.getElementById("addName").value;
var phone2 = document.getElementById("addPhone").value;
var mail2 = document.getElementById("addMail").value;
var addr2 = document.getElementById("addAddress").value;
function signUpCond(){
    if(uname2 != null && psword2 != null && rppsword2 != null &&  name2 != null && phone2 != null && mail2 != null && addr2 != null) {
        return true;
    }
    return false;
}

function signUpEvent(){
    if (signUpCond()==true){
        saveUser(getUserData());
    }
    else{
        Signup.disabled = true;
    }
}

Signup.onclick = function (){
    signUpEvent();
}
