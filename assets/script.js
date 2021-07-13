// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
// console.log(specialCharacters.length);
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// console.log(numericCharacters.length);
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// console.log(lowerCharacters.length);
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// console.log(upperCharacters.length);
var possibleCharacters = [];
var guaranteedCharacters = [];
var result = [];
var inputSpecial;
var inputNumeric;
var inputUpper;
var inputLower;
// console.log(possibleCharacters);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  window.alert(password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var passwordLength = window.prompt("Set your password length between 8 and 128 characters.");
  if (!passwordLength) {
    return;
  } else if ((isNaN(passwordLength)) || (passwordLength > 128) || (passwordLength < 8)) {
    var passwordLength = window.prompt("Invalid length. Your password length must be between 8 and 128 characters.");
    window.alert("Your password length is " + passwordLength);
  } else {
    window.alert("Your password length is " + passwordLength);
    passwordLength = Number(passwordLength);
    console.log(passwordLength);
  }

  includeCharacters();
  console.log(inputSpecial);

  while ((!inputSpecial) && (!inputNumeric) && (!inputUpper) && (!inputLower)) {
    window.alert("Password must contain at least ONE upper case, lower case, special, or numeric character.");
    includeCharacters();
  }

  if (inputSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandomCharacterFromSet(special));
    console.log(guaranteedCharacters);
  }

  if (inputNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandomCharacterFromSet(numeric));
    console.log(guaranteedCharacters);
  }

  if (inputLower) {
    possibleCharacters = possibleCharacters.concat(lower);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandomCharacterFromSet(lower));
    console.log(guaranteedCharacters);
  }

  if (inputUpper) {
    possibleCharacters = possibleCharacters.concat(upper);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandomCharacterFromSet(upper));
    console.log(guaranteedCharacters);
  }
  result = result.concat(guaranteedCharacters);
  console.log(result);

  for (var i = 0; i < (passwordLength - (guaranteedCharacters.length)); i++) {
    result.push(getRandomCharacterFromSet(possibleCharacters[i]));
  }
  return result.join("");
}

function includeCharacters() {
  inputSpecial = window.confirm("Do you want to include special characters?");
  console.log(inputSpecial);
  inputNumeric = window.confirm("Do you want to include numeric characters?");
  console.log(inputNumeric);
  inputUpper = window.confirm("Do you want to include uppercase characters?");
  console.log(inputUpper);
  inputLower = window.confirm("Do you want to include lowercase characters?");
  console.log(inputLower);
}

// Input: an array of characters
// Output: a random character from the array provided
function getRandomCharacterFromSet(characterSet) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);