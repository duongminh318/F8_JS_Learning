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

//độ dài mảng
console.log(languages.length)

//in ra phần từ
console.log(languages[0]);

//kết mảng thành chuỗi 
console.log(languages.join(" +"));

// xoá element cuối mảng, trả về phần tử đã xoá
console.log(languages.pop()); 
// nếu xoá hết các phần tử của mảng sẽ trả về undefined

// thêm element vào cuối mảng, trả về độ dài mới của mảng
console.log(languages.push("python", "C#"));

// xoá element đầu mảng, trả về phần tử đã xoá
console.log(languages.shift()); 

// thêm vào đầu mảng, trả length khi đã thêm
//console.log(languages.unshift("Dart", "C++"));
//console.log(languages);

// languages.splice(start_index, so phan tu muon xoa)
languages.splice(1, 2)

// thay vì xoá thì chèn (vị trí muốn chèn, 0, giá trị chèn)
languages.splice(1, 0, 'Dart')

// console.log(languages);
// var languages2= [
//     "nodejs",
//     "reactjs",
//     "html",
// ];

// hợp nhất hai mảng
//ar languages3= languages.concat(languages2);
//console.log(languages3);


// cắt mảng (start index, end index) - copy
//console.log(languages3.slice(1, 3));
//console.log(languages3.slice(-1, -2));
//console.log(languages3[languages3.length -1])


//var list= [1, 2, 3];
//console.log(list.length);