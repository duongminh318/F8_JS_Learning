// Viết chương trình nhập 2 số a, b. Tính tổng và hiệu của 2 số đó rồi in kết quả ra màn hình.

var a = prompt("Input a: ");
var b = prompt("Input b: ");

var tong = Number(a) + Number(b);// chuyển từ kiểu string sang kiểu dữ liệu number
var hieu = a - b;

console.log("Sum: " + tong);
console.log("Subtraction: " + hieu);