"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const chooseRandom = exports.chooseRandom = (array = [], number) => {
    if (array.length <= 1) {
        return array;
    }
    if (!number >= 1 && !number < array.length) {
        number = Math.floor(Math.random() * array.length) + 1;
    }

    let randomIndices = number;

    let array2 = array.slice(0, randomIndices);

    return array2;
};

// export const chooseRandom = (array = [], number) => {
//     if (array.length <= 1) {
//         return array
//     }
//     if (!number >= 1 && !number < array.length) {
//         number = Math.floor(Math.random() * array.length) + 1
//     }
//     let randomIndices = []
//     let array2 = [...array]

//     function shuffle(randomIndices) {
//         randomIndices = new Array(number)

//         while (number > 0) {

//             let index = Math.floor(Math.random() * counter);

//             counter--;

//             let temp = array2[number]
//             array2[number] = array2[index]
//             array2[index] = temp              

//     }
// }
// return randomIndices.slice(0, n)
// }