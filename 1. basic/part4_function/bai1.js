//Bài 1: Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).


function giaiPTBac1(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log("phuong trinh vo so nghiem");
        } else if (b != 0) {
            console.log("phuong trinh vo  nghiem");
        }

    } else if (a != 0) {
        console.log("phuong trinh co nghiem x=" + (-b / a).toFixed(2));

    }


}

var a = prompt("Enter Num a: ");
var b = prompt("Enter Num b: ");
giaiPTBac1(a, b);


