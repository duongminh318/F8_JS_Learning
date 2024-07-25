/**
 * Mảng trong javascript- Array
 * 1. Tạo mảng
 *      - Cách tạo
 *      - sử dụng cách nào? tại sao?
 *      - kiểm tra data type?
 * 2. Truy xuất mảng
 *      - độ dài mảng => lenght
 *      - lấy phần tử theo index => array[]
 */

// tạo cách 1
// var languages= [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined,
//     function (){

//     },
//     {},
//     123,
// ];

// 

//tạo cách 2
var languages = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function () {

    },
    {},
    123,
);

console.log(languages);
// kiem tra kieu du lieu co phai array ko
console.log(Array.isArray(languages));
console.log(languages.length);
console.log(languages[0]);

