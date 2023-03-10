'use strict';
console.log('spread.js file was loaded');

// ...array, ...object
// operatorius kuris leidzia pernesti objekto ar masyvo reiksmes,
// const a = [1,2,3]
// ...a => 1, 2, 3

/// Masyvai ==================

const a = [1, 2, 3];
const b = [4, 5, 6];

//
const aIrB = a.concat(b);
console.log('aIrB ===', aIrB);

const aIrBSpread = [0, ...a, 19, ...b, 7];
console.log('aIrBSpread ===', aIrBSpread);

const maxValue = Math.max(...aIrBSpread);
console.log('maxValue ===', maxValue);

console.log('spread', ...aIrBSpread);

let bCopy = [...b];
bCopy = [...bCopy, 25];
console.log('bCopy ===', bCopy);
console.log('b ===', b);

// Object ============

const user = {
  name: 'Jane',
  town: 'Klaipeda',
  age: 29,
};

let userCopy = { ...user };
userCopy.hasCar = true;
console.log('user ===', user);
console.log('userCopy ===', userCopy);
const pets = {
  hasCat: false,
  hasDog: true,
};
userCopy = { ...userCopy, ...pets };
console.log('userCopy ===', userCopy);
