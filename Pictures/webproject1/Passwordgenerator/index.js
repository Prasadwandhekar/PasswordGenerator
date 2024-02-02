const inputslider = document.querySelector("[data-lengthslider]");
const lengthdisplay = document.querySelector("[data-lengthnumber]");
const passworddisplay = document.querySelector("[data-passworddisplay]");
const copybtn = document.querySelector("[data-copy]");

const copymsg = document.querySelector("[data-copymsg]");

const uppercasecheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#lowercase");
const numberscheck  = document.querySelector("#numbers")
const symbolscheck = document.querySelector("#symbols")

const indicator = document.querySelector("[data-indicator]");

const generatebtn = document.querySelector(".gneratebtn");

const allcheckbox = document.querySelectorAll("input[type=checkbox]");
const symbols = '`!@#$%^&*()~?/.>,<;:';

let password = "";
let passwordlength = 10;
let checkcount=0;

handleslider();
//ste strength circle color to grey 
setIndicator("#ccc");

//set passwordlength

function handleslider(){
    inputslider.value = passwordlength;
    lengthdisplay.innerText = passwordlength;
    //or kuch?
    const min = inputslider.min;
    const max = inputslider.max;
    inputslider.style.backgroundSize = ( (passwordlength-min)*100/(max -min)) + "% 100%"
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow-hw
    indicator.style.backgroundcolor = color;
    indicator.style.boxShadow =`0px 0px 12px 1px ${color}`;
}

function getrndinteger(min ,max){
   return  Math.floor( Math.random() * (max -min )) + min;

}

function gneraterondomnumber(){
    return getrndinteger(0,9);
}

function generateuppercase(){
    return   String.fromCharCode(getrndinteger(65,90));

}
// (97,98,99,101,102,103,104,105,106,107,108,109,110,111,112,113114,115,116,117,118,119,120,122);                       (65,66,67,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90);
function generatelowercase(){
    return   String.fromCharCode(getrndinteger(97,122));

}


function generatsymbol(){
    const randnum = getrndinteger(0, symbols.length);
    return symbols.charAt(randnum);
}

function calstrength() {
    let hasupper = false;
    let haslower = false;
    let hasnum = false;
    let hassym = false;
    if(uppercasecheck.checked) hasupper = true;
    if(lowercasecheck.checked) hasloweer = true;
    if(numberscheck.checked) hasnum = true;
    if(symbolscheck.checked) hassym= true;

    if(hasupper && haslower && (hasnum||hassym) && passwordlength>=8) {
        setIndicator("#0fa");
    }
    else if ((haslower || hasupper) && (hasnum || hassym) && passwordlength >=6){
        setIndicator("#ff0")
    }
    else{
        setIndicator("#f00");
    }
    
}

async function  copycontent(){
    try{
        await  navigator.clipboard.writeText(passworddisplay.value);
        copymsg.innerText = "copied";

    }
    catch(err){
           copymsg.innerText = "failed";
    }
    //to make copy wala span messege
    copymsg.classList.add('active')

    setTimeout( ()=>{
        copymsg.classList.remove("active")
    } ,2000); 

}

function shufflePassword(array){
    //fisher yates method  built in Method
     for(let i = array.length -1 ;i> 0; i--){
           const j = Math.floor(Math.random() * (i+1 ));
           const temp = array[i];
           array[i] = array[j];
           array[j]=temp;
     }

     let str ="";
     array.forEach((el) => (str += el) );
     return str;

    }

function handlecheckboxchange(){
    checkcount = 0;
    allcheckbox.forEach((checkbox)=>{
        if(checkbox.checked)
          checkcount++;
    });

    //special condion
    if(passwordlength < checkcount){
        passwordlength=checkcount;
        handleslider();
    }
}



allcheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckboxchange);
})





inputslider.addEventListener('input',(e) =>{
    passwordlength = e.target.value;
    handleslider();
})

copybtn.addEventListener('click',()=>{
    if(passworddisplay.value)
      copycontent();
})

generatebtn.addEventListener('click',()=>{
       //none of the check box ar selected 
       if(checkcount ==0 ) return;

       if(passwordlength<checkcount){
        passwordlength= checkcount;
        handleslider();
       }

        console.log("Starting the gourney") 

       // find out new password

       //remove old passeword
       password ="";

       //lets put the stuff mentioned by checked boxes
    //    if(uppercasecheck.checked){
    //     password+=generateuppercase();
    //    }

    //    if(lowercasecheck.checked){
    //     password+=generatelowercase();
    //    }

    //    if(numberscheck.checked){
    //     password+=gneraterondomnumber();
    //    }

    //    if(symbolscheck.checked){
    //     password+=generatsymbol();
    //    }

      let funcarr =[];

      if(uppercasecheck.checked)
            funcarr.push(generateuppercase);

      if(lowercasecheck.checked)
            funcarr.push(generatelowercase);

      if(numberscheck.checked)
            funcarr.push(gneraterondomnumber);

      if(symbolscheck.checked)
            funcarr.push(generatsymbol);


    //compulsory addition

    for (let i=0; i<funcarr.length;i++){
        password += funcarr[i]();
    }

    console.log("compulsory addition done");

    //remaining addition 
    for(let i=0; i<passwordlength-funcarr.length;i++){
        let randindex = getrndinteger(0,funcarr.length);
        console.log("random"+randindex);
        password += funcarr[randindex]();
        
    }

    //shuffle the password
    console.log("remaining addition done");

    password = shufflePassword(Array.from(password));
    console.log("shuffling done")
    //show in UI

    passworddisplay.value = password;
   console.log("done");
    //calculate strength

    calstrength();



})













