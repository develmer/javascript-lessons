/*
Switch = Can be an efficient replacement to many else if statements
*/

let day = 1;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Sunday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  default:
    console.log(`${day} is not a day!`);
}
