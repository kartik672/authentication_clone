// let bulb = document.querySelector("#bulb");
// let btn = document.querySelector("button"); // Add quotes around "button" selector

// bulb.addEventListener("click", function () {
//     if (bulb.style.backgroundColor === "yellow") { // Check the background color
//         btn.innerHTML = "OFF";
//         bulb.style.backgroundColor = "white";
//     } else {
//         btn.innerHTML = "ON";
//         bulb.style.backgroundColor = "yellow";
//     }
// });
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("name-field");
let title = document.getElementById("title");
signinbtn.addEventListener("click",function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "sign in";
    signinbtn.style.backgroundColor = "#CE33D4";
    signinbtn.style.color = "#eaeaea";
    signupbtn.style.color = "#555";
    signupbtn.style.backgroundColor = "#eaeaea"
})
signupbtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    title.innerHTML = "sign up";
    signupbtn.style.color = "#eaeaea";
    signupbtn.style.backgroundColor = "#CE33D4";
    signinbtn.style.backgroundColor = "#eaeaea";
    signinbtn.style.color = "#555";


}
