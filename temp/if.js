console.log("___IF__ ");

// example
// let age = 18;

// if (age >= 18) {
//     console.log("Bạn đủ tuổi trưởng thành.");
// } else {
//     console.log("Bạn chưa đủ tuổi trưởng thành.");
// }


// let age = prompt("Nhập số tuổi của bạn:");

// if (age >= 18) {
//     console.log("Bạn đủ tuổi trưởng thành.");
// } else {
//     console.log("Bạn chưa đủ tuổi trưởng thành.");
// }

// kt số chẵn

// let number = 7;
// if (number % 2 === 0) {
//     console.log("Số chẵn");
// } else {
//     console.log("Số lẻ");
// }


let day = parseInt(prompt("Mời bạn nhập thứ vào nhé (1-7):"));

if (day === 1) {
    console.log("Thứ Hai");
} else if (day === 2) {
    console.log("Thứ Ba");
} else if (day === 3) {
    console.log("Thứ Tư");
} else if (day === 4) {
    console.log("Thứ Năm");
} else if (day === 5) {
    console.log("Thứ Sáu");
} else if (day === 6) {
    console.log("Thứ Bảy");
} else if (day === 7) {
    console.log("Chủ Nhật");
} else {
    console.log("Số không hợp lệ");
}
