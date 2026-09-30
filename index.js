const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

function generatePasswords() {
    let password1 = ""
    for (let i = 0; i < 15; i++) {
        password1 += characters[generateRandomNumber()]
        console.log(password1)
    }
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        password2 += characters[generateRandomNumber()]
        console.log(password2)
    }
    firstPassword.textContent = password1
    secondPassword.textContent = password2
}

function generateRandomNumber() {
    // console.log(Math.floor(Math.random() * characters.length))
    return Math.floor(Math.random() * characters.length)
}


