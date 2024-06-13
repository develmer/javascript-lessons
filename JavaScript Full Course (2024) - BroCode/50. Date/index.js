/*
    Date objects = Objects that contain values that represent dates and times
                   These date objects can be changed and formatted
*/

// Date(year, month, day, hour, minute, second, ms)
// Formats : Date(2024, 0, 1, 2, 3, 4, 5)
//           Date("2024-01-02T12:00:00Z");
//           Date("17000000000")
// const date = new Date(1700000000000);
// console.log(date);

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth();
// console.log(month);

// const day = date.getDate();
// console.log(day);

// const hour = date.getHours();
// console.log(hour);

// const minute = date.getMinutes();
// console.log(minute);

// const second = date.getSeconds();
// console.log(second);

// const milli = date.getMilliseconds();
// console.log(milli);

// const dayOfTheWeek = date.getDay();
// console.log(dayOfTheWeek);

const date = new Date();

date.setFullYear(1985);
date.setMonth(5);
date.setDate(7);

console.log(date);
