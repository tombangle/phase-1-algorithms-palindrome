function isPalindrome(str) {
  // Write your algorithm here
  const reversedStr = str.split(``).reverse().join(``);
  return str === reversedStr;
}

/* 
  Add your pseudocode here
  //Is the word a palindrome?
  //How can we code a word to read reverse?
  //Once we get the word reversed, how can we compare it to the original word?
  //What do we need to return?
*/

/*
  Add written explanation of your solution here
  //I identified the palindrome as a string in stead of a word.
  //Then the string converted itself into an array.
  //The array was reversed, turned back into a string, and compared to itself.
  //If the string equals the original, it is true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
