// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    let total = 0;
    for (let i of arrayOfNumbers) {
        total += i;
      }
    return total;
    }
  //  assignment.sumOfNumbers = sumOfNumbers;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const scores = [50, 65, 53, 74, 65, 86, 97, 80, 92, 100];
  console.log(`The sum of all the Numbers: ${sumOfNumbers(numbers)}`);
  console.log(`The sum of all the Scores: ${sumOfNumbers(scores)}`);


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter( even => (even % 2 === 0))
}
// assignment.countEvenNumbers = countEvenNumbers;
const evenNumbers = [2, 4, 7, 10, 12, 15, 35, 18, 20, 27, 99]
  console.log(`The even numbers are: ${countEvenNumbers(evenNumbers)}`)


/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

