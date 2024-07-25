//kiểm tra điều kiện
var check = true;
// nhập liệu
var chieuDai = prompt("Nhập chiều dài: ");
// check dữ liệu nhập vào
if (chieuDai == '' || chieuDai == null) {
    console.log("Vui lòng nhập chiều dài!");
    check = false;
} else if (isNaN(chieuDai)) {
    console.log("Nhập chiều dài không đúng định dạng số!");
    check = false;
} else if (chieuDai <= 0) {
    console.log('Chiều dài phải lớn hơn 0');
    check = false;
}

var chieuRong = prompt("Nhập chiều rộng: ");

if (chieuRong == '' || chieuRong == null) {
    console.log("Vui lòng nhập chiều rộng!");
    check = false;
} else if (isNaN(chieuRong)) {
    console.log("Nhập chiều rộng không đúng định dạng số!");
    check = false;
} else if (chieuRong <= 0) {
    console.log('Chiều rộng phải lớn hơn 0');
    check = false;
}

// tính toán
if (check) {

    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTich = chieuDai * chieuRong;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);
}