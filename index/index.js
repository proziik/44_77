//45
// let elems = document.querySelectorAll('p');
// console.log(elems[0].textContent);
// console.log(elems.length);
// elems.forEach(function(elem) {
//   console.log(elem.textContent);
// });

//46
// let elems = document.querySelectorAll('p');
// console.log(elems.slice(1, 3));

//47
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
//    ];
   
//    for (let element of test) {
//      if (Array.isArray(element)) {
//        console.log("Это массив");
//      } else {
//        console.log("Это не массив");
//      }
//    }

//48
// let elems = document.querySelectorAll('p');
// let arr = [];

// for (let i = 1; i < elems.length - 1; i++) {
//   arr.push(elems[i]);
// }

// let elems = document.querySelectorAll('p');
// let middleParagraphs = Array.from(elems).slice(1, elems.length - 1);

//49
// let elems = document.querySelectorAll('p');
// console.log(elems.constructor.name);
// let node = document.getElementById('myElementId').childNodes;
// console.log(node.constructor.name); 
// let node = document.getElementById('myElementId').children;
// console.log(node.constructor.name); 
// let elems = document.getElementsByClassName('myClass');
// console.log(elems.constructor.name); 

//50
// let newParagraph = document.createElement('p');
// parent.appendChild(newParagraph);
// let elems1 = parent.getElementsByTagName('p'); 
// let elems2 = parent.querySelectorAll('p');     
// console.log(elems1.length); 
// console.log(elems2.length); 


// let newParagraph = document.createElement('p');
// parent.appendChild(newParagraph);
// let children = parent.children;
// let childNodes = parent.childNodes;
// console.log(children.length); 
// console.log(childNodes.length); 

//51
// let symbol1 = Symbol();
// let symbol2 = Symbol();
// let symbol3 = Symbol();

// console.log(symbol1); 
// console.log(symbol2); 
// console.log(symbol3); 

// console.log(symbol1 === symbol2); 
// console.log(symbol1 === symbol3); 

//52
// let symbol1 = Symbol('описание символа 1');
// let symbol2 = Symbol('описание символа 2');
// let symbol3 = Symbol('описание символа 3');

// console.log(symbol1); 
// console.log(symbol2); 
// console.log(symbol3); 

//53
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj); 

//54
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';

// for (let key in obj) {
//  console.log(obj[key]); // 1, 2, 3 - ключ с символом не будет перебираться
// }

//55
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = function() {
//  console.log(new Date()); 
// };
// for (let key in obj) {
//  console.log(obj[key]); 
// }
// obj[sym]();

//56
// let arr = [1, 2, 3];
// let sym = Symbol();
// let sumFunction = function() {
//   return this.reduce((acc, val) => acc + val, 0);
// };
// arr = arr.map(() => sumFunction);
// let sum = arr[0](); 
// console.log(sum); 
// arr.push(4, 5, 6);
// sum = arr[0](); 
// console.log(sum);

//57
// const sumSymbol = Symbol.for('sum');
// function addSumKey(obj) {
//   if (!obj.hasOwnProperty(sumSymbol)) {
//     obj[sumSymbol] = function() {
//       let sum = 0;
//       for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//           sum += this[key];
//         }
//       }
//       return sum;
//     };
//   }
// }
// const obj1 = {};
// const obj2 = {};
// const obj3 = {};
// addSumKey(obj1);
// addSumKey(obj2);
// addSumKey(obj3);
// console.log(obj1[sumSymbol] === obj2[sumSymbol] && obj2[sumSymbol] === obj3[sumSymbol]); 

//58
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);

// console.log(key1); 
// console.log(key2); 

//59
// let map = new Map();
// let hasIterator = map[Symbol.iterator] !== undefined;
// console.log(hasIterator); 

//60
// let str = "Hello, World!";
// for (let char of str) {
//  console.log(char);
// }

// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// for (let [key, value] of map) {
//  console.log(key, value);
// }

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// for (let num of set) {
//  console.log(num);
// }

//61
// let arr = [1, 2, 3];
// let hasIterator = arr[Symbol.iterator] !== undefined;
// console.log(hasIterator); 

// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// hasIterator = map[Symbol.iterator] !== undefined;
// console.log(hasIterator); 

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// hasIterator = set[Symbol.iterator] !== undefined;
// console.log(hasIterator); 

// let str = "Hello, World!";
// hasIterator = str[Symbol.iterator] !== undefined;
// console.log(hasIterator); 

//62
// let nodes = document.querySelectorAll('p');
// let iter = nodes[Symbol.iterator]();

// while (true) {
//   let { value, done } = iter.next();
//   if (done) break;
//   console.log(value);

// let collection = document.getElementsByTagName('p');
// let iter = collection[Symbol.iterator]();

// while (true) {
//   let { value, done } = iter.next();
//   if (done) break;
//   console.log(value); 
// }

//63
// function  * descendingGenerator() {
//     for (let i = 5; i >= 1; i--) {
//       yield i;
//     }
//   }
//   let iter = descendingGenerator();
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   console.log(iter.next()); 

//64
// function *  decrementer(start) {
//     while (start > 0) {
//       yield start;
//       start--;
//     }
//   }
//   let iter = decrementer(10);
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   function *  halver(start) {
//     while (start >= 1) {
//       yield start;
//       start /= 2;
//     }
//   }
//   let iter = halver(10);
//   console.log(iter.next()); 
//   console.log(iter.next()); 
//   function *  nextPowerOfTwo() {
//     let power = 1;
//     while (true) {
//       yield power;
//       power  * = 2;
//     }
//   }
//   let iter = nextPowerOfTwo();
//   console.log(iter.next().value); 
//   console.log(iter.next().value); 
//   console.log(iter.next().value); 
//   function *  fibonacci() {
//     let a = 0, b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }
//   let iter = fibonacci();
//   console.log(iter.next().value); 
//   console.log(iter.next().value); 
//   console.log(iter.next().value); 

//65
// function  * func() {
//     for (let i = 1; i <= 3; i++) {
//      yield i;
//     }
//    }
   
//    let elems = func();
//    for (let elem of elems) {
//     console.log(elem);
//    }
//    elems = func(); 
//    for (let elem of elems) {
//     console.log(elem);
//    }

//66
// function  * func(obj) {
//     for (let key in obj) {
//       yield [key, obj[key]];
//     }
//   }
  
//   let iter = func({a: 1, b: 2, c: 3});
  
//   for (let [key, value] of iter) {
//     console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
//   }

//67
// let obj = {a: 1, b: 2, c: 3};
// obj[Symbol.iterator] = function *  () {
//   for (let key in this) {
//     yield {key, val: this[key]};
//   }
// };
// for (let elem of obj) {
//   console.log(elem);
// }

//68
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function  * (){
//      for (let key in this){
//       yield this[key];
//      }
//     }
//    };
   
//    for (let elem of obj) {
//     console.log(elem); 
//    }

//69
// let arr = [1, 2, 3];
// let iter = arr.values();
// for (let elem of iter) {
//     console.log(elem); 
// }
// let set = new Set([1, 2, 3]);
// iter = set.values();
// for (let elem of iter) {
//     console.log(elem); 
// }

// 70
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iter = map.keys();
// for (let key of iter) {
//   console.log(key); // a, b, c
// }


// let set = new Set([1, 2, 3]);
// let iter = set.keys();
// for (let key of iter) {
//   console.log(key); // 1, 2, 3
// }



// 71
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// let iter = map.entries();
// for (let entry of iter) {
//   console.log(entry); // [['a', 1], ['b', 2], ['c', 3]]
// }
// let set = new Set([1, 2, 3]);
// let iter = set.entries();
// for (let entry of iter) {
//   console.log(entry); // [1, 1], [2, 2], [3, 3]
// }
// let nodes = document.querySelectorAll('div');
// let iter = nodes.entries();
// for (let entry of iter) {
//   console.log(entry); // [0, div], [1, div], [2, div] и т.д.
// }


// 72
// В коллекции Set по умолчанию действует итератор values. 

// 73
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function  * (){
//       for (let key in this){
//         yield this[key];
//       }
//     }
//   }; 
//   let arr = [...obj]; 
//   console.log(arr); 
  
  
//   74
//   let str = '12345';
// let sum = 0;
// for (let digit of str) {
//   sum += parseInt(digit, 10); 
// }
// console.log(sum); 


// 75
// let num = 12345;
// let sum = 0;
// for (let digit of String(num)) {
//   sum += parseInt(digit, 10); 
// }
// console.log(sum); 


// 76
// let cells = document.querySelectorAll('table tr td');
// for (let [num, cell] of cells.entries()) {
//   cell.textContent += ' ' + (num + 1);
// }

// 77
// let inputs = document.querySelectorAll('input');
// for (let [key, {id, value}] of inputs.entries()) {
//   console.log(key, id, value);
// }
