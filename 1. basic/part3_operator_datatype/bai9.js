// Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

/**
 * delta< 0 => vo nghiem
 * a= 0 => nghiem kep
 */
var a = prompt("Enter num a: ");
var b = prompt("Enter num b: ");
var c = prompt("Enter num c: ");

// xet dieu kien
if (a == 0) {       //=> tro ve phuong trinh bac nhat
    if (b == 0) {
        if (c == 0) {
            console.log("Phương trình vô số nghiệm!");
        } else if (c != 0) {
            console.log("Phương trình vô nghiệm!");
        }
    }
    else {
        console.log("Phuong trinh co nghiem: " + (-c / b).toFixed(2));
    }
} else {
    var delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta == 0) {
        console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a)).toFixed(2));
    } else {
        var x1 = (-b - Math.sqrt(delta)) / (2 * a);
        var x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));
    }
}