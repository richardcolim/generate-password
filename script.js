/*
//
  create: @GreatStack
  author: @richardbernardcolim
  github: https://github.com/richardcolim
//
*/
const passwordBox = document.getElementById("password");
const lenght = 6;
const number = "0123456789";
function createPassword() {
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];

    while(lenght > password.length) {
        password += number[Math.floor(Math.random() * number.length)];
    }
    passwordBox.value = password;
} 
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}