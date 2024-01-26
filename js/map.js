// // // /*const map = new Map();
// // // map.set("name", "Sejong University");
// // // map.set("students", 17000);
// // // map.set("location", "Gwanjingu");
// // // map.set("type", "private");
// // // map.set("hasEnglishTrack", true);

// // // console.log(map.entries());

// // // let set = new Set();
// // // set.add("Sejong");
// // // set.add(1);
// // // set.add(true);
// // // set.add(1);
// // // console.log(set);

// // // */
// // // let set = new Set();
// // // let set2 = new Set();

// // // let k = [30, 2, 9, 3, 30, 9, 10];

// // // for (let i = 0; i < k.length; i++) {
// // //   // set.add(k[i]);
// // //   // // if (k[i] === 30) {
// // //   // //   set.delete(k[i]);
// // //   // // }
// // //   if (k[i] % 2 === 0) {
// // //     set.add(k[i]);
// // //   } else {
// // //     set2.add(k[i]);
// // //   }
// // // }

// // // console.log(set);
// // // console.log(set2);

// // // console.log(set.has(3));
// // // console.log(set.has(10));
// // // console.log(set.has(11));
// // // console.log(set.has(115));

// // // // set.clear();
// // // console.log(set.size);
// // // console.log(set2.size);

// // // // 1. count from 0 t 10 and from n to 1
// // // // 2. count from 1 to 10 and add by 5
// // // // 3. count from 1 to n and multiply by n
// // // // 3. count from 1 to 100 and find even and odd numbers and find numbers which are dividable by 7
// // // // make 3 objects, product,class, city.

// // // function homework(arr) {}

// // // let setArr = [1, 3, 5, 6];
// // // console.log(homework(setArr));
// // // console.log(homework(setArr));
// // // console.log(homework(setArr));

// // // console.log(homework(setArr));
// // // console.log(homework(setArr));
// // // name = "Mirzohid";
// // // console.log(name);

// // // {
// // //   // name ni faqatgina shu curly bracketni ichida ishlatolaman
// // //   let name = "Mirzohid";
// // // }
// // // //console.log(name);
// // // let name1 = "Sirojiddin";
// // // {
// // //   console.log("inside curly bracket", name1);
// // // }

// // // console.log("Outside curly bracket", name1);

// // // function findHeightScore(param) {
// // //   if (param >= 95) {
// // //     console.log("A");
// // //   } else if (param < 90 && param > 85) {
// // //     console.log("B");
// // //   } else {
// // //     console.log("C");
// // //   }
// // // }

// // // findHeightScore(100)
// // // findHeightScore(89);
// // // // findHeightScore(50);

// // // function switchFunction(param) {
// // //   switch (param) {
// // //     case 100:
// // //       console.log("A");
// // //       break;
// // //     case 90:
// // //       console.log("B");
// // //       break;
// // //     case 80:
// // //       console.log("C");
// // //       break;
// // //     default:
// // //       console.log("Fail");
// // //   }
// // //   // console.log(new Date().getDay());
// // // }

// // // switchFunction(70);

// // let arr = [1, 2, 3, 4];
// // // arr.push(5);

// // // arr[arr.length ]=5;

// // let cars = [];
// // cars.push(5);
// // cars.push(8);
// // cars.push(9);
// // cars.push(21);
// // cars.push(100);
// // cars.push(900);

// // console.log(cars);

// // // map
// // const sum = cars.map(function (car) {
// //   return car + 2;
// // });

// // console.log(sum);

// // // forEach
// // cars.forEach((car) => {
// //   if (car < 50) {
// //     console.log("it is bigger");
// //   }
// // });

// // // filter
// // const newCars = sum.filter((car) => car < 50);
// // console.log(newCars);

// // // find

// // for (let i = 0; i < sum.length; i++) {
// //   console.log(sum[i]);
// // }

// // //finIndex
// // let index = sum.findIndex((value) => value === 102);
// // console.log(index);

// // // split
// const string = "Js course";
// const arr1 = string.split("");
// console.log(arr1);

const str = "sample";
str.split("");

const str2 = "a bs";
// str2.join(' ')

const str3 = "Siroj iddin";
// str3.join(' ')='Sirojiddin'

// // // splice
// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.splice(3, 1);
// console.log(res);

// // const deleted = numbers.splice(2, 3,6,7);
// // console.log(deleted);

// // // // indexOf

// let example = "Hello this is Java Script";
// console.log(example.indexOf(" "));

// // // // reduce

// const onlyNumbers = [3, "hello", "!", true, 23, undefined, null, 34]; // return only num, only string.

// const onlyNumbersArray = onlyNumbers.filter((item) => typeof item === "number");

// const onlyStringsArray = onlyNumbers.filter((item) => typeof item == "string");

// console.log("Only numbers:", onlyNumbersArray);
// console.log("Only strings:", onlyStringsArray);

const notDuplicate = [6, 1, 10, 6, 3, 1]; //  return non duplicate, return duplicates
// const set = new Set();
// let uniqueValues = [];
// notDuplicate.forEach(function (item) {
//   set.add(item);
// });
// uniqueValues.push(set.values());
// const newValue = uniqueValues.map((val) => val);

// console.log(newValue);

const result = notDuplicate.filter(
  (val, index) => notDuplicate.indexOf(val) === index
);

// console.log(result);

const findNumberPercent = (a, b) => {
  return (b * 100) / a;
};

const sum = findNumberPercent(5, 2);
console.log(sum);
