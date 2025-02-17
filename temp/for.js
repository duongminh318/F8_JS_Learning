console.log("__For___")

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let numLoops = prompt("Nhập số lần bạn muốn lặp:");

// for (let i = 0; i < numLoops; i++) {
//     console.log("Lần lặp thứ " + (i + 1));
// }


let N = 5;
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log("Tổng các số từ 1 đến " + N + " là: " + sum);