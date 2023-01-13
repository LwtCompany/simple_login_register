

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
        console.log("Somethingwrong")
    }
  
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
        errorDataType.data = data;
        errorDataType.message = `Berilgan uzinlikdan kichkina ${lengthx}`;
        errorDataType.dateTime = Date();
        errorData.push(errorDataType);
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
    console.log({result})
    if(result ? result.length : 0  > 0){
        errorDataType.data = data;
        errorDataType.message = `Raqam qatnashganlikda ${result}`;
        errorDataType.dateTime = Date();
        return true;
    }else{
        return false;
    }
}

function isEmail(data){
    let pattern  = /@/g, pattern2 = /./g;

    let checkDog = data.match(pattern);
    let checkDots = data.match(pattern2)

    if((checkDog ? checkDog.length : 0 == 1) && (checkDots ? checkDog.length : 0 == 1)){
        let checkAfterDot = data.slice(data.indexOf(".") +1);
        return isAttendedDigit(checkAfterDot)
    }else{
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
        return false
    }
}

function validationData(data, dataType){
    console.log({data, dataType})
    const allResults = [];
    allResults.push(!isAttendedDigit(data.name));
    allResults.push(isEmail(data.email));
    allResults.push(checkPass(data.password));
    const checkingLength = Object.entries(data).every((value, index, array) => {
       return minLengthCheck(value[1], dataType[value[0]].minXlength);
    });
    allResults.push(checkingLength);

    let finalResult = allResults.every((value, index) => {
        return value;
    })

    console.log(errorData)
    if(finalResult){      
        return true;
    }else{
        return false;
    }
    
    
}

