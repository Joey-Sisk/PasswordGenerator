// sets the query selector in order to add functionality to the button on the page
const generateBtn = document.querySelector("#generate");

// these are the base character options the user can choose from
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const integer = "1234567890";
const symbol = "!@#$%^&*-_=+;:,.?`~";

// the generatePassword function will access and alter these variables
let combinedCharacterChoices = ""; // this is where the character types are added to be accessed when creating the password
let passwordTempHolder = ""; // the password is temporarily held in this while the last for loop runs
let passwordLength; // the length of the password chosen by the user. Limits the last for loop in order to set length of the string

// these are only used to add character types and verify at least 1 type is selected
let lowerCharactersAdd;
let upperCharactersAdd;
let integerCharactersAdd;
let symbolCharactersAdd;

// this is the default function provided to print the password out for the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

// this function does all the work asking the user what to include and eventually assembling the password
function generatePassword() {

  // this asks the user how long to make the password and ensures it meets the criteria, it also converts the input to numericals and rounds down to the nearest whole number
  passwordLength = Math.floor(parseInt(prompt("Please choose a password length between 8 and 128.")));
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Please use a numerical between 8 and 128");
    return;
    }

  // these ask the user what characters to include in the password
  lowerCharactersAdd = confirm("Would you like to use lowercase letters?");
  upperCharactersAdd = confirm("Would you like to use uppercase letters?");
  integerCharactersAdd = confirm("Would you like to use numbers?");
  symbolCharactersAdd = confirm("Would you like to use any special characters?");
  
  // this checks that the user has selected at least 1 type of character and adds the characters to the combinedCharacterChoices variable
  if (lowerCharactersAdd) combinedCharacterChoices += lower;
  if (upperCharactersAdd) combinedCharacterChoices += upper;
  if (integerCharactersAdd) combinedCharacterChoices += integer;
  if (symbolCharactersAdd) combinedCharacterChoices += symbol;
  if (!lowerCharactersAdd && !upperCharactersAdd && !integerCharactersAdd && !symbolCharactersAdd) {
    alert("Please choose at least 1 character type for your password.");
    return;
  }

  // this assembles the password from random characters in the combinedCharacterChoicesStr string
  for (var i = 0; i < passwordLength; i++) {
    passwordTempHolder += combinedCharacterChoices.charAt(Math.floor(Math.random() * combinedCharacterChoices.length)); 
  }

return password = passwordTempHolder; // sends finished password to the writePassword function
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);