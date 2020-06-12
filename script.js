// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?");
  //while user inputs an invalid value (not a nuber or between 8-128)
  while (isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
    alert("please a number between 8 -128!");
    passwordLength = prompt("How long would you like your password to be?")
  }

  var wanted = []; //records which specific types for password

  //number is valid
  var wantSpecial = confirm("Do you want special characters?");

  if(wantSpecial) {
    wanted.push("special");
  }

  var wantNumeric = confirm("Do you want numeric characters?");

  if(wantNumeric) {
    wanted.push("numeric");
  }

  var wantLower = confirm("Do you want lowercase characters?");

  if(wantLower) {
    wanted.push("lower");
  }

  var wantUpper = confirm("Do you want uppercase characters?");

  if(wantUpper) {
    wanted.push("upper");
  }

  if(wanted.length == 0) {
    alert("You must choose at least one type of character.");
    return null;
  }

  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numericChars = '0123456789';
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //build a for loop going for that certain length, randomly generating characters based on the types checked
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var type = wanted[Math.floor(Math.random() * wanted.length)];
    if(type == "lower") {
      password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    }
    else if(type == "upper") {
      password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    }
    else if( type == "numeric"){
      password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
    }
    else {
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
  }
  return password;
}





//WHEN generate password button is clicked
//PROMPT user for password length

//INIT length := user input from prompt

//IF length IS BETWEEN 8 and 128



// THEN
   // INIT useSpecial := CONFIRM special chars
   // INIT useNums := CONFIRM numeric chars
   // INIT useLower := CONFIRM lower case chars
  //  INIT useUpper := CONFIRM uppercase chars
  //IF useSpecial OR useNums OR useLower OR useUpper
  //THEN
   // generate password containing the correct types and length
 // END IF
//ELSE
  //ALERT password length error message
//END IF























