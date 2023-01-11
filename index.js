

const userData = [];

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
    let inpName = document.getElementById("name");
    let inpEmail = document.getElementById("email");
    let inpPassword = document.getElementById("password");

    isEmail(inpEmail.value);

    if(!isAttendedDigit(inpName.value)){
        if(minLengthCheck(inpName.value,  userDataType.name.minXlength) && minLengthCheck(inpEmail.value, userDataType.email.minXlength) &&  minLengthCheck(inpPassword.value, userDataType.password.minXlength)){
            userDataType.name.value  = inpName.value;
            userDataType.email.value = inpEmail.value;
            userDataType.password.value = inpPassword.value;
            userData.push(userDataType);
        }
    }
    
   
    console.log(userData)
    inpName.value = null;
    inpEmail.value = null;
    inpPassword.value = null;
}

//This function can count of length string and return true if given length equal string length othercase it returns false;
function minLengthCheck(data, lengthx){
    const strLength = data.length;
    if(strLength > lengthx){
        return true;
    }else{
        return false;
    }
}

// returns true if digit else false. Given string.
function isAttendedDigit(data){
    let pattern = /[0-9]/;
    const result =  data.match(pattern);
    if(result){
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
