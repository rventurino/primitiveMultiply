/*
Eloquent JavaScript, Chapter 8: Bugs and Errors
Question 1: Retry

Retry Say you have a function primitiveMultiply that in 20 percent of cases 
multiplies two numbers and in the other 80 percent of cases raises an exception 
of type MultiplicatorUnitFailure. Write a function that wraps this clunky 
function and just keeps trying until a call succeeds, after which it returns 
the result. Make sure you handle only the exceptions you are trying to handle.

(Page 142). 
*/

function primitiveMultiply(num1, num2) {
  for (;;) {
    try {
      let chance = Math.floor(Math.random() * 101);
      if (chance <= 20) {
        return num1 * num2;
      } else {
        throw MultiplicatorUnitFailure;
      }
    } catch (err) {
      console.log("ERROR ");
    }
  }
}
console.log(primitiveMultiply(10, 5));