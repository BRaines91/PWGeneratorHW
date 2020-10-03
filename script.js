//Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = document.querySelector("#numbers");
var symbols = document.querySelector("#symbols");
var charAmountNumber = document.querySelector("#characterAmountNumber");
var uppercase = document.querySelector("#uppercase");
var lowercase = document.querySelector("#lowercase");

var lowerCaseCode = arrayLowToHigh(97, 122);
console.log(lowerCaseCode);
var numberCaseCode = arrayLowToHigh(48, 57);
var symbolsCaseCode = arrayLowToHigh(32, 47);
var upperCaseCode = arrayLowToHigh(65, 90)
  .concat(arrayLowToHigh(58, 64))
  .concat(arrayLowToHigh(123, 126))
  .concat(arrayLowToHigh(91, 96))
  .concat(arrayLowToHigh(58, 64));

  // write password to the #password input
  function writePassword() {
    var password = buildPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password
  }

  function arrayLowToHigh(low, high) {
      var array = [];
      for(let i = low; i <= high; i++) {
          var character = String.fromCharCode(i);
          array.push(character)
      }
      return array;
  }

  function generatePassLength() {
      var passLength = document.getElementById("characterAmountNumber").value;
      document.getElementById("lengthDisplay").innerHTML = passLength
      console.log(passLength);
      return passLength;
  }

  function generateCharArray() {
      console.log("hey");
      var charArray = [];

      if(charAmountNumber.value >= 8 && characterAmountNumber.value <= 128) {
          if (
              numbers.checked === false &&
              symbols.checked === false &&
              uppercase.checked === false&&
              lowercase.checked === false
           ) {
               alert("Select choice");
              }   else {
                   console.log(uppercase.checked);
                   if (lowercase.checked) {
                       charArray = charArray.concat(upperCaseCode);
                   }
                   if (numbers.checked) {
                       charArray = charArray.concat(numbersCaseCode);
                    }
                   console.log(charArray);
                   if (uppercase.checked) {
                       charArray = charArray.concat(lowerCaseCode);                       
                   }
                   console.log(charArray);
                   if (symbols.checked) {
                       charArray = charArray.concat(symbolsCaseCode);
                   }
               }
           } else {
               alert(" Choose from different characters")
           }

         return charArray;
}

function buildPassword() {
    var length = generatePassLength();
    console.log(length);
    var passArray = generateCharArray();
    console.log(passArray);
    var results = [];
   
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * passArray.length);
        console.log(index)
        var digit = passArray[index];
        results.push(digits);
        console.log(results);
    }
    return results.join("")
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword)