// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// this should contain the final password string
let password = "";

// this object holds every possible character that the user can include in their password
const characters = {
  "lowerStr": "abcdefghijklmnopqrstuvwxyz",
  "upperStr": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "integerStr": "1234567890",
  "symbolStr": "!@#$%^&*-_=+;:,.?`~"
};

// this array will gather the chosen character string to be called on when the password is assembled
let charChoices = [];

// this allows for calling the different parts of the characters object
const lower = characters.lowerStr;
const upper = characters.upperStr;
const integer = characters.integerStr;
const symbol = characters.symbolStr;

// this will increase by 1 for every new character type added and allows for randomly selecting a character type
let charTypes = 0;

// this is the default function provided to print the password out for the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this function does all the work asking the user what to include and eventually assembling the password
function generatePassword() {

  // thus asks the user how long to make the password and ensures it meets the criteria
  let passLength = prompt("Please choose a password length between 8 and 128.");
    let passLengthInt = parseInt(passLength);
    if (passLengthInt < 8 || passLengthInt > 128 || typeof passLengthInt != "number" || passLength != passLengthInt ) {
    alert("Please use a whole number between 8 and 128");
    return;
    }

  // this asks the user what characters to include in the password
  let lowerStrTrue = confirm("Would you like to use lowercase letters?");
  let upperStrTrue = confirm("Would you like to use uppercase letters?");
  let integerStrTrue = confirm("Would you like to use numbers?");
  let symbolsStrTrue = confirm("Would you like to use any special characters?");
  
  // this checks that the user has selected at least 1 type of character and adds the characters to the charTypes array
  if (lowerStrTrue === true) {
    charTypes = charTypes ++;
    charChoices.push(lower);
  }
  if (upperStrTrue === true) {
    charTypes = charTypes ++;
    charChoices.push(upper);
  }
  if (integerStrTrue === true) {
    charTypes = charTypes ++;
    charChoices.push(integer);
  }
  if (symbolsStrTrue === true) {
    charTypes = charTypes ++;
    charChoices.push(symbol);
  }
  if (lowerStrTrue === false && upperStrTrue === false && integerStrTrue === false && symbolsStrTrue === false) {
    alert("Please choose at least 1 character type for your password.");
    return;
  }

  // this assembles the password from random characters in the charChoices array
  for (var i = 0; i < passLengthInt; i++) {
    let charPick = Math.floor(Math.random() * charTypes);
    let passChar = charChoices[charPick];
    password.push(passChar);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// charAt.charChoices(Math.floor(Math.random() * charChoices.length))