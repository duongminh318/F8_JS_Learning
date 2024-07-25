// Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? Đó là tam giác gì?

var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");
var c = prompt("Nhập c: ");

var check = true;
if (a == '' || a == null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(a)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (a <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
}
// validate số vừa nhập
if (b == '' || b == null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(b)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (b <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
}

if (c == '' || c == null) {
    console.log("Vui lòng nhập!");
    check = false;
} else if (isNaN(c)) {
    console.log("Nhập không đúng định dạng số!");
    check = false;
} else if (c <= 0) {
    console.log('Phải nhập số lớn hơn 0');
    check = false;
}
// khong co so nao nhap sai luat
if (check) {
    if (Number(a) + Number(b) > c && Number(b) + Number(c) > a && Number(a) + Number(c) > b) {
        if (a == b && b == c) { 
            console.log('Tam giác đều');
        } else if (a == b || b == c || a == c) {
            console.log('Tam giác cân');
        } else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            console.log('Tam giác vuông');
        } else {
            console.log('Tam giác thường');
        }
    } else {
        console.log('Không phải tam giác!');
    }
}