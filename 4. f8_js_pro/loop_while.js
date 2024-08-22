/**
 * Viết một hàm findGCD nhận vào hai tham số là hai số nguyên dương a và b,
 *  và trả về Ước chung lớn nhất (UCLN) của chúng. Nếu một trong các đầu vào 
 * không phải là số nguyên dương thì hàm trả về "Invalid input. Please provide two positive integers.".
 */ 

import { isInteger } from "./helpers.js";

/**
 * Finds the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.
 * @param {number} a - First positive integer.
 * @param {number} b - Second positive integer.
 * @returns {number} The GCD of a and b.
 */
const findGCD = (a, b) => {
    // Kiểm tra xem a và b có phải là số nguyên dương không
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        return 'Invalid input. Please provide two positive integers.';
    }
    
    // Đảm bảo rằng a lớn hơn b
    if (b > a) {
        let tempForSwap = a;
        a = b;
        b = tempForSwap;
    }
    
    // Thuật toán Euclid để tìm GCD 
    while (b !== 0) {
        let tempForFind = b;
        b = a % b; 
        a = tempForFind;
    }
    
    return a;
}


// Sample usage
console.log(findGCD(60, 48)); // 12
console.log(findGCD(12, 15)); // 3
console.log(findGCD(100, 80)); // 20
console.log(findGCD(7, 13));   // 1

/**
 * Viết một hàm printFibonacci nhận vào một số nguyên n và in ra dãy Fibonacci 
 * không vượt quá n. Dãy Fibonacci bắt đầu bằng hai số 0 và 1,
 *  mỗi số tiếp theo trong dãy là tổng của hai số trước đó.
 */

/**
 * Prints the Fibonacci sequence up to a value not exceeding n.
 * @param {number} n - The upper limit for the values in the Fibonacci sequence to be printed.
 */
function printFibonacci(n) {
    let a = 0, b = 1; // 2 giá trị đầu tiên
    let next;
    console.log(a);
    while (b <= n) {
        console.log(b);
        next = a + b;
        a = b;
        b = next;
    }
}

// Sample usage
printFibonacci(5); // 0, 1, 1, 2, 3, 5
printFibonacci(10); // 0, 1, 1, 2, 3, 5, 8