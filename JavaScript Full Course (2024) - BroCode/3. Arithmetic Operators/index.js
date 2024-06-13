/*
Arithmetic operators = operands (values, variables, etc.)
                        operator (+ - * /)
                        ex. 11 = x + 5;
*/
let students = 30;
// students = student + 1; // addition
// students = student - 1; // subtraction
// students = student * 2; // multiplication
// students = student / 2; // division
// students = student ** 2; // exponent
// students = student % 2; // modulus - remainder of a division
/*
Augmented assignment oprators
*/
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

/*
Increment and decrement
*/
// student++;
// studnet--;

console.log(`arithmetic operators: ${students}`);

/*
Operator precedence
1. parenthesis()
2. exponents
3. multiplication & division & modulo
4. addition and subtraction
*/
let result = 6 / 2 ** (2 + 5);
//6 / 2 ** 7;
//6 / 128;
// 0.046875
console.log(`result is ${result}`);
