/**
 * -- CHỌN CHỨC NĂNG --
        1. Nhập mảng
        2. Xuất mảng
        3. In số nguyên tố
        4. In số hoàn hảo
        5. Đếm số 0
        6. Đếm số nguyên tố
        7. Đếm số hoàn hảo
        8. Thoát
 */


// khởi tạo các phương thức

//input
function input(arr, n) {
    for (var i = 1; i <= n; i++) {
        var randomNumber = Math.floor(Math.random() * 100);
        arr.push(randomNumber);
    }

}

//output
function output(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

//tạo menu
var arrList = [];
do {
    var choice = prompt("Mời thím chọn chức năng chương trình: \n1: nhập mảng \n2. Xuất mảng \n3. In mảng \n4. In số hoàn hảo \n5. Đếm số 0 \n6. Đếm số nguyên tố \n7. Đếm số hoàn hảo \n8.Exit");

    switch (choice) {
        case "1":
            console.log("Bạn đã chọn chức năng Nhập mảng");
            var n = prompt("mời thím nhập số lượng phần tử mảng");
            input(arrList, n)
            break;
        case "2":
            console.log("Bạn đã chọn chức năng in mảng");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break;
        case "3":
            console.log("Bạn đã chọn chức năng In số nguyên tố");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break;
        case "4":
            console.log("Bạn đã chọn chức năng In số hoàn hảo");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break;

        case "5":
            console.log("Bạn đã chọn chức năng Đếm số 0");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break;

        case "6":
            console.log("Bạn đã chọn chức năng Đếm số nguyên tố");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break

        case "7":
            console.log("Bạn đã chọn chức năng Đếm số hoàn hảo");
            console.log("Giá trị các phần tử trong mảng là: ");
            output(arrList);
            break;
        case "8":
            console.log("Bạn đã chọn chức năng Thoát Chương Trình");
            alert("bye bye");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
            break;
    }




} while (choice !== "8");
