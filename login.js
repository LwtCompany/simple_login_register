function Signin(email, password) {
    let emailCurrent = email.value, passwordCurrent = password.value;
    let result = userData.find(element => {
        if(element.email == emailCurrent && element.password == passwordCurrent)  return element;       
    });
     if(result) {
        console.log(result);
        console.log("Siz saytimizga muvoffaqiyatli kirdingiz!")
        email.value = null, password.value = null;
     }else console.log("Bunday foydalanuvchi mavjud emas! Ro'yxatdan o'ting yoki Qaytadan tering!");

}
