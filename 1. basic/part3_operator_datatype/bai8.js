//Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).
// ax+b=0
/**
 * a=0 
 *      b=0 vo so nghiem
 *      b!=0 vo nghiem
 * 
 * a!=0 => x=-b/a
 */

var a = prompt("nhap gia tri cho a");
var b = prompt("nhap gia tri cho b");

if (a == 0) {
    if (b == 0) {
        console.log("phuong trinh vo so nghiem");
    } else if (b != 0) {
        console.log("phuong trinh vo  nghiem");
    }

} else if (a != 0) {
    console.log("phuong trinh co nghiem x=" + (-b / a));

}


