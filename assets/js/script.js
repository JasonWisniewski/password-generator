// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function generatePassword() {
//   return "this is the password"
// }
// Global variables
var characters = ["uppercase","lowercase","number","symbol"];
var specialCharactersArray = ["!","@","#","$","^","&","*"];
var lowerCaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var NumericsArray = ["0","1","2","3","4","5","6","7","8","9"];

//password length function varibles made global for later reference 
var passwordLengthInput
var specialCharacter
var upperCaseLetters
var lowerCaseLetters
var numerics
var finalPassword;
var possibleCharacters = [];

// function to ask user what they want and to store info in var above
var generatePassword = function () {
  
  // ask user how long they would like their pasword to be, parse int changes answer to number instead of a string
  passwordLengthInput = parseInt(window.prompt("How long would you like your password to be enter between 8 and 128 characters"));

  // If player enters in invalid answer bring back to question
  if (passwordLengthInput < 8 || passwordLengthInput > 128 || !passwordLengthInput) {
    window.alert("You need to provide a valid answer! Please try again.");
    return "";
  }

  // Would you like special characters? 
  specialCharacter = window.confirm("Would you like this password to contain special characters? ok = yes cancel = no" ); 
  console.log(specialCharacter);

  //  creating array possibleCharacters to be randomly selected from for 
  if (specialCharacter === true){
    possibleCharacters += specialCharactersArray;
  };
  console.log('special char', possibleCharacters);

  // Would you like lower case letters?
  lowerCaseLetters = window.confirm("Would you like lower case letters? ok = yes cancel = no");

  if (lowerCaseLetters === true){
    possibleCharacters +=(lowerCaseLettersArray);
  };
  console.log('lower case' , possibleCharacters);

   // Would you like upper case letters?
  upperCaseLetters = window.confirm("Would you like upper case letters? ok = yes cancel = no");

  if (upperCaseLetters === true){
    possibleCharacters += upperCaseLettersArray;
  };
  console.log('upper case' , possibleCharacters);

    // Would you like numerics?
  numerics = window.confirm("Would you like numerics? ok = yes cancle = no");

  if (numerics === true){
    possibleCharacters += NumericsArray;
  };
  console.log('numerics', possibleCharacters);

  if(!numerics && !lowerCaseLetters && !upperCaseLetters && !specialCharacter){
  alert("you have to enter at least one valid parameter")
  return ""
  }
  
  for (var i = 0; i < passwordLengthInput; i++) {
    var randomziedCharacter = Math.floor(Math.random * possibleCharacters.length)
    finalPassword += randomziedCharacter;
  };
  console.log('final password', finalPassword);
  // tells OG function to push into randomizer function
  //return(createPassword(possibleCharacter))
};
//  passwordInput();

//   var passwordRandomizer = function(){
//     // run through loop amount of times indicated by password length
//     for (var i = 0; i < passwordLengthInput; i++) {

//     // then we need to randomly selected values from array created above

//     }
//   }
//   passwordRandomizer();


// function createPassword(anyName){}
// for (var i = 0; i < passwordLengthInput; i++) {
//   if ( lowerCaseLetters === true) {
//     // gives me a random number between 0-26
//     var uniqueNumber26 = Math.floor(Math.random()*possibleCharacters.length-1);
//     // tells code to save uniqueNumber 26 as part of the finalPassword array
//     finalPassword.push(lowerCaseLettersArray[uniqueNumber26]);
// finalPassword += whatever the new character is
// at the end of the function return finalPassword
//     // then move on to next criteria
//   }

//   if (upperCaseLetters === true) {
//     // gives me a random number between 0-26
//     var uniqueNumber26 = Math.floor(Math.random()*26);
//     // tells code to save uniqueNumber 26 as part of the finalPassword array
//     finalPassword[i] =  upperCaseLettersArray[uniqueNumber26];
//     // then move on to next criteria
//   }
// } 

generateBtn.addEventListener("click", writePassword)