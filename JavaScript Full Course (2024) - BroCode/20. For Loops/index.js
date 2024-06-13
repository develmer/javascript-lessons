/*
For loop = repeat some code a LIMITED amount of times
*/
for (let i = 2; i <= 10; i += 2) {
  console.log("Hello", i);
}

for (let i = 10; i > 0; i--) {
  console.log("Hello", i);
}

for (let i = 1; i <= 20; i++) {
  if (i == 13) {
    continue;
  } else {
    console.log(i);
  }
}
