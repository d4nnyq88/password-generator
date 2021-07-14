// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var possibleCharacters = [];
var guaranteedCharacters = [];
var result = [];
var inputSpecial;
var inputNumeric;
var inputUpper;
var inputLower;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  window.alert(password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password on based on criteria from prompts
//function begins with asking for length of password - password must be a numberic value and is converted to a number
//once the correct value is entered, the user is notified of the password length
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
  }

  //call function here to ask users to select criteria for character types to use
  includeCharacters();

  while ((!inputSpecial) && (!inputNumeric) && (!inputUpper) && (!inputLower)) {
    window.alert("Password must contain at least ONE upper case, lower case, special, or numeric character.");
    includeCharacters();
  }

  if (inputSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandomCharacterFromSet(special));
  }

  if (inputNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandomCharacterFromSet(numeric));
  }

  if (inputLower) {
    possibleCharacters = possibleCharacters.concat(lower);
    guaranteedCharacters.push(getRandomCharacterFromSet(lower));
  }

  if (inputUpper) {
    possibleCharacters = possibleCharacters.concat(upper);
    guaranteedCharacters.push(getRandomCharacterFromSet(upper));
  }
  result = result.concat(guaranteedCharacters);

  for (var i = 0; i < (passwordLength - (guaranteedCharacters.length)); i++) {
    result.push(getRandomCharacterFromSet(possibleCharacters[i]));
  }
  //convert array into a string
  return result.join("");
}

// ask users to select criteria for characters, at least one character type must be selected
function includeCharacters() {
  inputSpecial = window.confirm("Do you want to include special characters?");
  inputNumeric = window.confirm("Do you want to include numeric characters?");
  inputUpper = window.confirm("Do you want to include uppercase characters?");
  inputLower = window.confirm("Do you want to include lowercase characters?");
}

// Input: an array of characters
// Output: a random character from the array provided
function getRandomCharacterFromSet(characterSet) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);