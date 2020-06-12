// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  
 
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUserLength );
function promptUserLength(){
  var passwordLength = prompt("How long would you like your password to be?"); 
  //while user inputs an invalid value (not a nuber or between 8-128)
  while (isNaN(passwordLength) || (passwordLength < 8 || passwordLength >128 ))
  alert("please a number between 8 -128!");
  passwordLength = prompt("How long would you like your password to be?")
}
//number is valid
var wantSpecial = confirm("Do you want special characters?");

var wantNumeric = confirm("Do you want numeric characters?")

var wantLower = confirm("Do you want lowercase characters?")

var wantUpper = confirm( "Do you want uppercase characters?")
//# Password Generator App
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























