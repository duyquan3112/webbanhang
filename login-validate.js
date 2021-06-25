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
    username: " ",
    password: " "
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

Signup.onclick = function () {
    saveUser(getUserData())
}