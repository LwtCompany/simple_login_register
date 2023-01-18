
const userData = [
    {
        name: "John",
        email: "john12@gmail.com",
        password: "123"
    },
    {
        name: "Sue",
        email: "sue12@gmail.com",
        password: "admin"
    }
];
function Signin(email, password){
    let email_current = email.value, password_current = password.value;

    
    let result =  userData.find(element => {
           if(element.email == email_current && element.password == password_current)
            return element;
    });

  
    console.log(result)

       
}