// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const array = [b, c, a];
// [a, b, c] = array;

// console.log(a, b, c);
// const fist = fistNumber  = numbers[2];

// .. rest, ...spread 
//               0      1      2     3     4     5     6    7  8       
// const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [One, , , Tree, , , , Seve] = numbers;


//                    0          1          2
//                 0  1  2    0  1  2    0  1  3
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [list1, list2, list3] = numbers;
console.log(list1[2]);

// const [, [,,six]] = numbers;
// console.log(numbers[1][2]);

// console.log(One, Tree, Seve);
// console.log(resto)
// console.log(fist);