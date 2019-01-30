# JS Challenges Problems

## 1. Factorials!

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

`5! = 1 * 2 * 3 * 4 * 5 = 120`

e.g.
```js
factorialize(5) // returns 120
```
Only integers greater than or equal to zero will be supplied to the function.

```js
function factorialize(num) {
  // Well... welcome to the Unknown
}
```
___

## 2. the Longest Word

Return the length of the longest word in the provided sentence.

Your response should be a number.

e.g.
```js
getLongestWord("over the garden wall.") // 6
```

Bonus for excluding punctuation.

``` js
function getLongestWord(str) {
  // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
}
```
___

## 3. Titleize a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

e.g.
``` js
titleize("oh, potatoes and molasses!") // "Oh, Potatoes And Molasses!"
```

Bonus for the exclusion of little words like "the","of", and "and".

```js
function titleize(str) {
  // if you want some, just ask us!
}
```
___

## 4. Chunk!

Write a function that splits an array into groups of the specified length and returns them as a two-dimensional array.

e.g. 
```js
chunkIt(["potatoes","molasses","greg","wirt"], 2) // [["potatoes","molasses"],["greg","wirt"]]
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) // [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
```

If the array length is not evenly divisible by the specified length, the remaining items should still be in their own 2nd dimensional array.

```js
function chunkIt(arr, length) {
  // We're burglars!
}
```
___

## 5. Teenage Mutant Ninja Strings

Wrtie a function that will return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return `true` because all of the letters in the second string are present in the first, ignoring case.

e.g.
```js
mutantCheck(["hello", "Hello"]) // true
mutantCheck(["Alien", "line"]) // true
mutantCheck(["Beatrice", "Beartifice"]) // false
```

```js
function mutantCheck(arr) {
  // Come on and join the Adelaide Parade! 
}
```

___

## 6. Maskify

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function which changes all but the last four characters of an input to '*'s.

e.g.
```js 
maskify("5555444433334321") // "************4321"
maskify("The Old Grist Mill") // "*************Mill"
maskify("Lorna") // "*orna"
maskify("") // ""
```

```js
function maskify(str) {
  // No. I'm the headless elephant. 
}
```
___

## 7. Don't be a Square -- return a bunch

Write a function that accepts an integer as an argument and returns an integer with every digit of the original squared.

e.g.

```js
squareTheDigits(232) // 494
squareTheDigits(9119) // 811181
```

```js
function squareTheDigits(int) {
  // Aw, come on! Let's go, captain! Lead the way! You can do it! 
}
```
___

## 8. Count Duplicula

We love to count! AH...ah...ah...

Write a function that will return the *count* of _distinct_ case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters (both uppercase and lowercase).

e.g.
```js
countDuplicates("abcde") // 0 -- there are no duplicated characters
countDuplicates("4carrots2") // 1 -- 'r' & 'r' are duplicate characters
countDuplicates("AHahah") // 2 -- 'A','a' & 'a', 'H','h','h'  are both duplicate characters
```

```js
function countDuplicates(str) {
  // One is a bird, Two are the trees, Three is the wind of the leaves
}
```
___

## 9. Cut out the Minimum

Given an array of integers, remove the smallest value. *Do not mutate the original array/list.* 

If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.

*Don't change the order of the elements that are left.*

e.g.
```js
removeSmallest([1,2,3,4,5]) // [2,3,4,5]
removeSmallest([5,3,2,1,4]) // [5,3,2,4]
removeSmallest([2,2,1,2,1]) // [2,2,2,1]
```

```js
function removeSmallest(arr) {
  // Oh no. Beatrice, I'm too young to go to frog jail.
}
```
___

## 10. At the end of the longest line

The new "Unicorn Squad" movie, "Unicorn Squad 8: 'Corn Gang," has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single $100, $50 or $25 bill. Yes, a $25 bill. A "Unicorn Squad 8" ticket costs 25 dollars.

Jason Funderberker is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Jason Funderberker sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return `true`, if Jason Funderberker can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return `false`.

e.g.
```js
correctChange([25, 25, 50]) // true 
correctChange([25, 100]) // false. Jason will not have enough money to give change for an $100 bill
correctChange([25, 25, 50, 50, 100]) // false.  Jason will not have the correct bills to give $75 change (you can't make two bills of 25 from one of 50)
correctChange([25,50,25,100,25,25,50,100,25,50,25,100,25,100,50]) // false
```

```js
function correctChange(arr) {
  // And now you're more lost than ever huh?
}
```
___

## 11. "Paired"-down Bracket Matching

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 

The function should return `true` if the string is valid, and `false` if it's invalid.

e.g.
```js
validParens("()") // true
validParens(")(()))") // false
validParens("(") // false
validParens("(())((()())())") // true
```

```js
function validParens(str) {
  // W-w-we just wanna get home with all our legs and arms attached!
}
```
___

## 12. Seek & Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by _one or more_ arguments. 

Remove all elements from the initial array that are of the same value as these arguments.

e.g.
```js
seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3) // [1,1]
seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3) // [1, 5, 1]
seekAndDestroy(["tea kettle", "frog", "cloud city", 12, "bluebird", "potatoes", 92, 65, "molasses", "lullaby", "barge"], "barge", "frog", "cloud city", "bluebird", "potatoes", "molasses", "lullaby" ) // ["teakettle", 12, 92, 65]
```

```js
function seekAndDestroy(arr, args) {
  // They're shiny and large like a fisherman's barge
}
```
___
## 13. Lucky Number ROT13

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' <=> 'N', 'B' <=> 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

e.g.
```js
rot13("URYYB JQV FRNGGYR!") // "HELLO WDI SEATTLE"
rot13("CBGNGBRF NAQ ZBYNFFRF") // "POTATOES AND MOLASSES"
rot13("VS LBHE FGBZNPU VF TEHZOYVA' NAQ LBHE ZBHGU FGNEGF N-ZHZOYVA'") // "IF YOUR STOMACH IS GRUMBLIN' AND YOUR MOUTH STARTS A-MUMBLIN'"
```

```js
function rot13(FGE) {
  // There is only one thing to keep your brain from crumblin'
}
```
___

## 14. Tabled

Write a function that returns a 2D array that represents a multiplication table from 1 through a given integer.

e.g.

```
given an argument of 3:

1 2 3
2 4 6
3 6 9
```
```js
generateMultiplicationTable(3) // [[1,2,3],[2,4,6],[3,6,9]]
generateMultiplicationTable(5) // [[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]]
```

Bonus for printing to the console in the format shown in the first example.

```js
function generateMultiplicationTable(int) {
  // Oh, potatoes and molasses. They're so much sweeter than algebra classes
}
```

___
## 15. Friends, Romans, lend me your tears

Write a function that takes an integer between 1 and 3999 and returns a Roman Numeral.

Yup.

e.g.
```js
romanNumerator(3) // "III".
romanNumerator(4) // "IV".
romanNumerator(68) // "LXVIII"
romanNumerator(83) // "LXXXIII"
romanNumerator(97) // "XCVII"
romanNumerator(500) // "D"
romanNumerator(3999) // "MMMCMXCIX"
```

```js
function romanNumerator(int) {
  // Don't you know the Beast is afoot here?!
}
```