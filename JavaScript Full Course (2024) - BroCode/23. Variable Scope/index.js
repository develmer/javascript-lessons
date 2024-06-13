/*
Variable scope = where a variable is recognized
                 and accessible (local vs global)
*/

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 1;
  console.log(x);
}

// Global variable is something that you can see or use outside your house
// Local variable is something that you can see or use inside your house
// All things inside the house will first be used by you or your family
