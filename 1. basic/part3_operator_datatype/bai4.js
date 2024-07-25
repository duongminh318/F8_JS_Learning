// Viết chương trình nhập đáy trên a, đáy dưới b và chiều cao h của một hình thang. Tính diện tích của hình thang này.

var canhTren = prompt("Nhập chiều dài đáy trên: ");
var canhDuoi = prompt("Nhập chiều dài đáy dưới: ");
var chieuCao = prompt("Nhập chiều cao: ");

var dienTich = (Number(canhTren) + Number(canhDuoi)) * chieuCao / 2;

console.log("Dien tich: " + dienTich);