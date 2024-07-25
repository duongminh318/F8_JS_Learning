/** Area Recangle
 * Tính chu vi hình chữ nhật
 */
// nhap lieu
var chieuDai = prompt("chieu dai: ");
var chieuRong = prompt("Nhập chieu rong: ");

// tinh toan

var cv = (Number(chieuDai) + Number(chieuRong)) * 2;
var dt = chieuDai * chieuRong;

//output3
console.log('chu vi: ' + cv);
console.log('dien tich: ' + dt);