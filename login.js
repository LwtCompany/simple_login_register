function Signin(email, password) {
    let emailCurrent = email.value, passwordCurrent = password.value;
   if(isEmail(emailCurrent) && checkPass(passwordCurrent)) {
    let result = userData.find(element => {
        if(element.email == emailCurrent && element.password == passwordCurrent)  return element;       
    });
     if(result) {
        console.log(result);
        console.log("Siz saytimizga muvoffaqiyatli kirdingiz!")
        email.value = null, password.value = null;
     } 
    } 
    else{ console.log("Ma'lumotlar noto'g'ri kiritildi! Yoki bunday foydalanuvchi mavjud emas! Ro'yxatdan o'ting!")
    email.value = null;
    password.value = null;
}

}
