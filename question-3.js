// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
//1
function checkPasswordStrength(userPassword) {
    if (userPassword.length < 6) {
        return "Weak";
    }else if (userPassword.length < 10) {
        return "Medium";
    } else {
        return "Strong";
    }
};

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));

