// function averagePair(array) {
//   let firstPar = 0;
//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     firstPar += currentNum;
//   }
//   firstPar = firstPar / array.length;
//   return firstPar;
// }

const arr = [3, 5, 7, 9, 13, 25, 73];
const averagePair = (arr = [], target = 1) => {
  let x = arr.length - 1;
  for (let y = 0; y < x; y++) {
    while (y < x && arr[x] + arr[y] > 2 * target) {
      x--;
    }
    if (x !== y && arr[x] + arr[y] === 2 * target) {
      return true;
    }
  }
  return false;
};
console.log(averagePair(arr, 4.5));
