/*
//
  create: @GreatStack
  author: @richardbernardcolim
  github: https://github.com/richardcolim
//
*/
const passwordBox = document.getElementById("password");
const lenght = 12;
const number = "0123456789";
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const symbol = "@#$_&-+%/!?=*";

const allChars = lowerCase + number + symbol + upperCase;
function createPassword() {
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
} 
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
