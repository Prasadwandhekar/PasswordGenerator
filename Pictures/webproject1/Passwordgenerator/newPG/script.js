const inputSlider = document.querySelector("[data-lengthSlider]");                  // copping all html data in this element
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_{}][<>,./?:';

let password = "";              // take needed variable
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");       // set indicator colour gray 


function handleSlider() {              // set Password Length and show on UI
    inputSlider.value = passwordLength;     // for slider
    lengthDisplay.innerText = passwordLength;   // for len of pass number
    // for slider moving colour
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%";
}

function setIndicator(color) {                  // create some function for our conviniance
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min , max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,122));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,90));
}

function generateSymbol(){
      const randNum = getRndInteger(0, symbols.length);
      return symbols.charAt(randNum);
}

function calcStrenth(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){               // setting circle colour acording to length
        setIndicator('#0f0');
    }
     else if ( (hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >=6){
        setIndicator('#ff0');
    }
     else {
        setIndicator("#f00");
     }   
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);         // for copping msg function
        copyMsg.innerText = "Copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    // to make copy wala span visible
    copyMsg.classList.add("active");                // copied msg disnya sathi

    setTimeout( () => {                             // copied msg janya sathi
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){     // for shuffle array we have algoridam :- fisher Yates Method

    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));      // generate random j and swap bs khatam
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;

}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    // special condition :- no of pass length is less than checked count
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change' , handleCheckBoxChange);
})


inputSlider.addEventListener('input' , (e) => {
    passwordLength = e.target.value;                // e.target slider chi value fetch kartay
    handleSlider();
})

copyBtn.addEventListener('click' , () => {
    if(passwordDisplay.value)
        copyContent(); 
})

generateBtn.addEventListener('click' , () => {
    // none of the checkbox are selected
    
    if(checkCount ==0)
     return;
     
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
    // console.log('till 145 done');
    // let's start the journey to find new passWord

    console.log('Start the journy');            // check where the bug
    // remove old pass
    password = " ";
    
    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    
    // if(numbersCheck.checked){
    //     password += generateRandomNumber;
    // }

    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);
    
    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);


     // compulsory addition    
     for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
     }

     console.log('Compulsary addition done');  

     // remaining addition
     for(let i=0; i<passwordLength - funcArr.length; i++){
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log('randomIndex' + randIndex);  
        password += funcArr[randIndex]();
     }

     console.log('remaining addition done');  

     // shuffle the password
     password = shufflePassword(Array.from(password));

     console.log('Shuffele done');  

     // show in UI
     passwordDisplay.value = password;

     console.log(' UI  done');  

     //calculate Strenth
     calcStrenth();


});