

const userData = [];
const errorData = [];

function Click(){
    const userDataType = {
        name:{
            value: String,
            minXlength: 4
        },
        email:{
            value: String,
            minXlength: 6
        },
        password:{
            value: String,
            minXlength: 6
        }
    };
    
    let currentData = {};
    currentData.name = document.getElementById("name").value;
    currentData.email = document.getElementById("email").value;
    currentData.password = document.getElementById("password").value;
   
    if(validationData(currentData, userDataType)){
        userData.push(currentData);
        // inpName.value = null;
        // inpEmail.value = null;
        // inpPassword.value = null;
        console.log(userData)
    }else{
        console.log("Xatolik yuz berdi!")
    }
    statusError(currentData, userDataType) // statusError funksiya ishlashi uchun
}

//This function can count of length string and return true if given length equal string length othercase it returns false;
function minLengthCheck(data, lengthx){
    let errorDataType = {
        data: String,
        message: String,
        dateTime: String
    }
    const strLength = data.length;
    if(strLength > lengthx){
        return true;
    }else{
        return false;
    
        
    }
}
// returns true if digit else false. Given string.
function isAttendedDigit(data){
    let errorDataType = {
        data: String,
        message: String,
        dateTime: String
    }
    let pattern = /[0-9]/g;
    const result = data.match(pattern);
    
    if(result ? result.length : 0  > 0){
        errorDataType.data = data;
        errorDataType.message = `Raqam qatnashganlikda ${result}`;
        errorDataType.dateTime ;
        return true;
    }else{
        return false;
    }
}

function isEmail(data){
    let pattern  = /@/g, pattern2 = /./g;
    
    let checkDog = data.match(pattern);
    let checkDots = data.match(pattern2)
    let checkAfterDot = data.slice(data.indexOf(".") +1);
    let checkAfterDot2 = (isAttendedDigit (checkAfterDot))
    // console.log((checkDog ? checkDog.length : 0 == 1) && (checkDots ? checkDots.length : 0 == 1) && !checkAfterDot2)
    if((checkDog ? checkDog.length : 0 == 1) && (checkDots ? checkDots.length : 0 == 1) && !checkAfterDot2){
       
        //shu yerni o'zgartirdim
        return true     
    }
    else{
        return false;
    }

}


function checkPass(data){
    let pattern = /\d/g, pattern2 = /\W/g, pattern3 = /[a-z]/g, pattern4 = /[A-Z]/g,
        test1 = data.match(pattern),
        test2 = data.match(pattern2),
        test3 = data.match(pattern3),
        test4 = data.match(pattern4);

    if(test1 && test2 && test3 && test4){
        return true;
    }else{
        return false;
    }
}



 function isName(data){ // isName funksiyasini qoshdim bu nameda raqam va belgi qatnashmaganini true va false qaytaradi.
    let  pattern = /\W/g;
    test = data.match(pattern);
    

    if(!test && !isAttendedDigit(data)){
        return true;
    }
    else{
        return false;
    }
 }

function validationData(data, dataType){
   
    const allResults = [];
    
   
    // allResults.push(isAttendedDigit(data.name));
    allResults.push(isEmail(data.email));
    allResults.push(checkPass(data.password));  
    allResults.push(isName(data.name))

    const checkingLength = Object.entries(data).every((value, index, array) => {
       return minLengthCheck(value[1], dataType[value[0]].minXlength);
       
    });
   
    

    allResults.push(checkingLength);
    // console.log(allResults)
    let finalResult = allResults.every((value, index) => {
        return value;
    })
       

  
    if(finalResult){      
        return true;
    }else{
        return false;
    }
    
    
}

function statusError(data,  dataType){  // statusError funksiya qo'shdim xatolikni bilish uchun
    
    const allResults = {
        name: Boolean, lengthName: Boolean,
        email: Boolean, lengthEmail: Boolean,
        password: Boolean, lengthPass: Boolean,
        
    };
    
    // allResults.push(isAttendedDigit(data.name));
    allResults.name = (isName(data.name))
    allResults.lengthName = (minLengthCheck(data.name, dataType.email.minXlength))
    allResults.email = (isEmail(data.email));
    allResults.lengthEmail = (minLengthCheck(data.email, dataType.name.minXlength))
    allResults.password = (checkPass(data.password));  
    allResults.lengthPass = (minLengthCheck(data.password, dataType.password.minXlength))

    

    const checkingLength = Object.entries(data).every((value, index, array) => {
       return minLengthCheck(value[1], dataType[value[0]].minXlength);
       
    });
    
   

    // allResults.length = (checkingLength);
    console.log(allResults)
}


