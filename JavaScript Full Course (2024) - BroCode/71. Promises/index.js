// Promise - An object that manages asynchronous oprations
//           Wrap a promise object around (asynchronous code)
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog.");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen.");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash.");
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
