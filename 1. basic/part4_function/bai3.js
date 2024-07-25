// tao menu
//== GIẢI PHƯƠNG TRÌNH ==
/**
 *  BẬC 1- 1
    BẬC 2 -2
    THOÁT -3 
 */

// phuong trinh bac 1

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

// pt bac 2

function giaiPTBac2(a, b, c) {
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
}



do {
    console.log("======= MENU+++++++");
    console.log("nhấn 1 nếu muốn giải pt bậc nhất");
    console.log("nhấn 2 nếu muốn giải pt bậc hai");
    console.log("nhấn 3 nếu muốn thoat chuong trinh");


    var choise = prompt("moi ban chon");
    if (choise == 1) {
        console.log("ban da chon 1 _ giai phuong trinh bac nhat");
        var a = prompt("Enter num a: ");
        var b = prompt("Enter num b: ");
        giaiPTBac1(a, b)

    } else if (choise == 2) {
        console.log("ban da chon 2 _ giai phuong trinh bac hai");
        var a = prompt("Enter num a: ");
        var b = prompt("Enter num b: ");
        var c = prompt("Enter num c: ");
        giaiPTBac2(a,b,c);
    } else if (choise == 3) {
        alert("bye");
        console.log("Exit APP")
        break;
    }

} while (true)



