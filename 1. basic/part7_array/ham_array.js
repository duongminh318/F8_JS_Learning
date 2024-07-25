/**
 * một số hàm làm việc với array
 * // keyword: javascript array methods
 * 
 * 1. Tostring  => chuyển đổi kiểu dữ liệu của các phân tử sang String
 * 2. join      => ký tự ngăn cách giữa các phần tử
 * 3. Pop
 * 4. Push  => thêm phần tử cuối mảng
 * 5. Shift => xoá element cuối mảng
 * 6. Unshift => ngược lại với shift
 * 7. Splicing => xoá
 * 8. Concat
 * 9. Slicing
 * 
 */

var languages=[
    'Javascript',
    'Java',
    'PHP'
];

// console.log(languages.join(" +"));


console.log(languages.pop()); // xoá element cuối mảng
//console.log(languages.pop()); // xoá element cuối mảng
//console.log(languages.pop()); // xoá element cuối mảng
// trả về phần tử đã xoá
// nếu xoá hết các phần tử của mảng sẽ trả về undefined

console.log(languages.push("python", "C#"))// thêm element vào cuối mảng
// trả length khi đã thêm

console.log(languages.shift()); // xoá element đầu mảng
// trả về phần tử đã xoá

console.log(languages.unshift("Dart", "C++")); // thêm element đầu mảng
// trả length khi đã thêm

console.log(languages);

// languages.splice(start_index, so phan tu muon xoa)
languages.splice(1, 2)
// thay vì xoá thì chèn (vị trí muốn chèn, 0, giá trị chèn)
languages.splice(1, 0, 'Dart')

console.log(languages);
var languages2= [
    "nodejs",
    "reactjs",
    "html",

];

// hợp nhất hai mảng
var languages3= languages.concat(languages2);
console.log(languages3);


// cắt mảng (start index, end index) - copy
//console.log(languages3.slice(1, 3));
//console.log(languages3.slice(-1, -2));
console.log(languages3[languages3.length -1])


var list= [1, 2, 3];
console.log(list.length);