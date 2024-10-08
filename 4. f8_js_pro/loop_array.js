/**
 * Tổng hợp bài tập duyệt mảng #1 

1. Viết hàm countGreaterThan nhận vào một mảng số và một số value,
 hàm trả về số lượng phần tử trong mảng lớn hơn value.
2. Viết hàm alternateSum để tính “tổng xen kẽ” từ một mảng số. 
Trong “tổng xen kẽ”, bạn sẽ cộng số ở vị trí chẵn và trừ số ở vị trí lẻ trong mảng.
3. Viết hàm sumOfSquares nhận vào một mảng số nguyên và trả về tổng 
bình phương của mỗi số trong mảng.
4. Viết hàm filterEvensAndSum để lọc ra các số chẵn từ một mảng số 
nguyên đầu vào và tính tổng của chúng.
5. Viết hàm findLongestWord nhận vào một mảng các chuỗi và trả về 
chuỗi dài nhất trong mảng đó. Nếu có nhiều chuỗi có độ dài giống nhau và là dài nhất, trả về chuỗi xuất hiện đầu tiên.
 */

/**
 * 1. Counts elements in an array greater than a specified value.
 * @param {number[]} arr - Array to search.
 * @param {number} value - Value to compare against.
 * @return {number} Count of elements greater than value.
 */

function countGreaterThan(arr, value) {
    let countOfArray = 0;
    // duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value)
            countOfArray++;
    }
    return countOfArray;
}

// Sample usage
console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
console.log(countGreaterThan([], 5)); // 0

/**
 * 2. Calculates the alternating sum of an array, adding even-indexed elements and subtracting odd-indexed ones.
 * @param {number[]} arr - An array of integers.
 * @return {number} The alternating sum of the array.
 */
function alternateSum(arr, value) {
    let total = 0;
    // duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        total += (i % 2 === 0) ? arr[i] : -arr[i];
    }
    return total;
}
// Sample usage
// console.log(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
// console.log(alternateSum([1, 2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)

/**
 * 3. Calculates the sum of the squares of each element in an array.
 * @param {number[]} arr - An array of integers.
 * @return {number} The sum of squares of the array elements.
 */
const sumOfSquares = (arr) => {
    let sumOfSquaresArray = 0;
    // duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        sumOfSquaresArray += arr[i] * arr[i];
    }
    return sumOfSquaresArray;
};

// Sample usage
// console.log(sumOfSquares([1, 2, 3])); // 14 (1^2 + 2^2 + 3^2 = 14)
// console.log(sumOfSquares([4, 5, 6])); // 77 (4^2 + 5^2 + 6^2 = 77)

/**
 * 4. Filters even numbers from an array and calculates their sum.
 * @param {number[]} arr - An array of integers.
 * @return {number} Sum of the even numbers.
 */
function filterEvensAndSum(arr) {
    let sumOfEven = 0;
    // duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumOfEven += arr[i];
        }
    }
    return sumOfEven;
}
// Sample usage
// console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6 = 12)
// console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146 (12 + 14 + 20 + 100 = 146)

/**
 * 5. Finds the longest string in an array.
 * @param {string[]} arr - An array of strings.
 * @return {string} The longest string in the array. If there are multiple strings of the same maximum length, the first one is returned.
 */
function findLongestWord(arr) {
    let longest = "";
    // duyệt mảng
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
// Sample usage
// console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
// console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello

/** LOOP ARRAY PART 2 */

/**
 * Tổng hợp bài tập duyệt mảng #2 

1. Viết hàm compressString để rút gọn một chuỗi bằng cách thay thế các nhóm ký tự liên tiếp
 giống nhau bằng một ký tự đó kèm theo số lần xuất hiện liên tiếp của ký tự đó.
2. Viết hàm calculateGrade để tính điểm trung bình từ một mảng điểm số và trả về xếp loại dựa 
trên điểm trung bình đó. Xếp loại được định nghĩa như sau:
    A: Điểm trung bình từ 90 trở lên
    B: Điểm trung bình từ 80 đến dưới 90
    C: Điểm trung bình từ 70 đến dưới 80
    D: Điểm trung bình từ 60 đến dưới 70
    F: Điểm trung bình dưới 60
3. Viết hàm isPalindrome để kiểm tra một chuỗi có phải là chuỗi đối xứng hay không. Một chuỗi 
được coi là đối xứng nếu việc đọc nó từ trái qua phải hoặc từ phải qua trái đều giống nhau.
4. Viết hàm findMissingNumber để tìm số thiếu trong một dãy số từ 1 đến n. Mảng đầu vào chứa các
 số từ 1 đến n nhưng thiếu một số, không có trùng lặp.
5. Viết hàm maxConsecutiveOnes để tìm độ dài của chuỗi số 1 dài nhất trong một mảng nhị phân.
 Mảng đầu vào chỉ chứa các số 0 và 1.
 */

/**
* 1. Compresses a string by replacing sequences of the same character with that character followed by the count of repetitions.
* @param {string} str - The string to be compressed.
* @return {string} The compressed string.
*/
const compressString = (str) => {
    if (str.length === 0) return ''; // Trả về chuỗi rỗng nếu đầu vào là chuỗi rỗng

    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Kiểm tra nếu ký tự hiện tại giống với ký tự tiếp theo
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Thêm ký tự hiện tại và số lần lặp lại vào chuỗi nén
            compressed += str[i] + count;
            count = 1; // Reset lại bộ đếm
        }
    }
    return compressed;
};

// Sample usage
console.log(compressString('aaabbc')); // a3b2c1
console.log(compressString('aabcccccaaa')); // a2b1c5a3

/**
 * 2. Calculates the average grade from an array of scores and returns the letter grade.
 * @param {number[]} scores - An array of scores.
 * @return {string} The letter grade.
 */
const calculateGrade = (scores) => {
    if (scores.length === 0) return 'No grades available'; // Trường hợp không có điểm số nào

    // Sử dụng reduce để tính tổng của các điểm số trong mảng `scores`
    const total = scores.reduce((acc, score) => acc + score, 0);
    // `acc` (viết tắt của `accumulator`) là biến tích lũy, bắt đầu với giá trị `0`
    // `score` là giá trị của phần tử hiện tại trong mảng `scores` khi `reduce` lặp qua

    // Trong mỗi lần lặp, cộng giá trị của `score` vào `acc`
    // Lần đầu tiên: `acc = 0`, `score = 85`, kết quả `acc + score = 85`
    // Lần thứ hai: `acc = 85`, `score = 90`, kết quả `acc + score = 175`
    // Lần thứ ba: `acc = 175`, `score = 78`, kết quả `acc + score = 253`
    // Lần thứ tư: `acc = 253`, `score = 92`, kết quả `acc + score = 345`
    // Lần thứ năm: `acc = 345`, `score = 88`, kết quả `acc + score = 433`
    const average = total / scores.length;

    // Xếp loại dựa trên điểm trung bình
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};

/**
 * 3. Checks if a string is a palindrome, ignoring case.
 * @param {string} str - The string to be checked.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    // i đi từ đầu; j đi từ cuối mảng
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
// Sample usage
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

/**
 * 4. Finds the missing number in an array containing all numbers from 1 to n except one.
 * @param {number[]} arr - An array of integers from 1 to n missing one number.
 * @param {number} n - The maximum number in the range.
 * @return {number} The missing number.
 */
const findMissingNumber = (arr) => {
    // Tính n từ độ dài của mảng
    const n = arr.length + 1;

    // Tính tổng dự kiến của dãy từ 1 đến n
    const expectedSum = (n * (n + 1)) / 2;

    // Tính tổng thực tế của các phần tử trong mảng
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Số thiếu chính là sự chênh lệch giữa tổng dự kiến và tổng thực tế
    return expectedSum - actualSum;
}

// Sample usage
// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
// console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0

/**
 * 5. Finds the maximum number of consecutive 1s in a binary array.
 * @param {number[]} nums - A binary array consisting of only 0s and 1s.
 * @return {number} The maximum number of consecutive 1s.
 */
const maxConsecutiveOnes = (arr) => {
    let maxCount = 0;  // Biến để lưu độ dài chuỗi 1 dài nhất
    let currentCount = 0;  // Biến để lưu độ dài chuỗi 1 hiện tại
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;  // Nếu gặp 1, tăng đếm chuỗi 1 hiện tại
            maxCount = Math.max(maxCount, currentCount);  // Cập nhật chuỗi dài nhất nếu cần
        } else {
            currentCount = 0;  // Gặp 0 thì đặt lại đếm chuỗi 1 hiện tại
        }
    }
    return maxCount;  // Trả về độ dài chuỗi 1 dài nhất
}

// console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
// console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2

/** MẢNG LỒNG NHAU */
// duyệt mảng đa chiều
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        totalSum += numbers[i][j];
    }
}

console.log(totalSum);

// bảng cửu chương
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    i<9 && console.log('----------');  // i>= 9 sẽ không in ra dòng -------
  }

  /**
   * Viết hàm printMultiplicationTable không nhận tham số, 
   * in ra bảng cửu chương từ 2 đến 9 sử dụng vòng lặp for lồng nhau.
   */
  /**
 * Prints the multiplication table from 2 to 9.
 */
const printMultiplicationTable = () => {
    for (let i = 2; i < 10; i++) {
        // Vòng lặp ngoài chạy từ 2 đến 9 để in bảng cửu chương từ 2 đến 9
        console.log(`Bảng cửu chương ${i}:`); // In tiêu đề bảng cửu chương
        for (let j = 1; j <= 10; j++) {
            // Vòng lặp trong chạy từ 1 đến 10 để in từng dòng của bảng cửu chương
            console.log(`${i} x ${j} = ${i * j}`); // In ra kết quả phép nhân
        }
        //if (i < 9) console.log("---------"); // Nếu bảng cửu chương không phải bảng cuối cùng, in ra dòng ngăn cách
    }
};

