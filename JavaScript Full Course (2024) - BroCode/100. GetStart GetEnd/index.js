const str1 = "rad";
const str2 = "1foo2,2oy4,5dt7,6d7";

// expected output: rd;
//                  fooydtdd;
//let splitIntoArray;
let combine = "";

function getBeginEnd(str) {
  let splits = str.split(",");
  let result = "";

  for (let i = 0; i <= str.length; i++) {
    if (splits[i] !== undefined) {
      let stringElements = splits[i];
      let temp = [];
      for (let e of stringElements) {
        let convertToNum = Number(e);
        if (isNaN(convertToNum)) {
          temp.push(e);
        }
      }
      let filter = temp.slice(0, 1) + temp.slice(-1);
      result += filter;
    }
  }

  return result;
}

const getResult = getBeginEnd(str2);
console.log(getResult);
