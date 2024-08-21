/**
 * Tổng hợp bài tập vòng lặp For #1 
Cập nhật tháng 2 năm 2024

Hãy hoàn thành toàn bộ các yêu cầu sau:

1. Viết hàm listEvenNumbers nhận vào hai tham số là start và end, 
sau đó in ra tất cả các số chẵn từ start đến end sử dụng vòng lặp for.
2. Viết hàm sumOddNumbers nhận vào một mảng số và trả về tổng của tất cả các 
số lẻ trong mảng đó sử dụng vòng lặp for.
3. Viết hàm findMin nhận vào một mảng số và trả về số nhỏ nhất trong mảng đó 
sử dụng vòng lặp for.
 */

    /**
     * 1. Lists all even numbers in a given range.
     *
     * @param {number} start - The start of the range
     * @param {number} end - The end of the range
     */
    function  listEvenNumbers (start , end){
        for(let i=start;i<=end; i++){
            if(i%2===0){
                console.log(i);
            }
        }
    }

    // Sample usage
    listEvenNumbers(1, 10);
    // 2
    // 4
    // 6
    // 8
    // 10

    /**
     * 2. Calculates the sum of all odd numbers in an array.
     *
     * @param {Array<number>} numbers - The array of numbers
     * @returns {number} The sum of odd numbers
     */
    function  sumOddNumbers  (arr){
        let sumOfOddNumber=0;
        for(let i=0;i<arr.length; i++){
            if(arr[i]%2!==0){
            sumOfOddNumber+=arr[i];
            }
        }
        return sumOfOddNumber;
    }

    // Sample usage
    // console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9

    /**
     * 3. Finds the minimum number in an array.
     *
     * @param {Array<number>} arr - The array to find the minimum number in
     * @returns {number} The minimum number in the array
     */
    function  findMin   (arr){
        let minOfArray=arr[0];
        for(let i=1;i<arr.length; i++){
            if(arr[i]<minOfArray){
            minOfArray=arr[i];
            }
        }
        return minOfArray;
    }

    // Sample usage
    // console.log(findMin([5, 2, 8, 1, 4])); // 1

    /**
     * Tổng hợp bài tập vòng lặp For #2 
1. Viết hàm countPositiveNumbers nhận vào một mảng số và 
trả về số lượng số dương trong mảng đó.
2. Viết hàm sumArray nhận vào một mảng số và trả về tổng của 
tất cả các số trong mảng đó.
3. Viết hàm calculateAverage nhận vào một mảng số và trả về 
trung bình cộng của các số trong mảng đó.
     */

/**
 * 1. Counts the number of positive numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The count of positive numbers
 */
function countPositiveNumbers (arr){

    let countPositive=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            countPositive++;
        }
    }
    return countPositive;
}

// Sample usage
console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3

/**
 * 2. Calculates the sum of all numbers in an array.
 *
 * @param {Array<number>} arr - The array of numbers
 * @returns {number} The sum of the numbers
 */
function sumArray  (arr){

    let sumOfArray=0;
    for(let i=0; i<arr.length;i++){   
            sumOfArray+=arr[i];        
    }
    return sumOfArray;
}

// Sample usage
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**
 * 3. Calculates the average of numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The average of the numbers
 */
function calculateAverage   (arr){

     if (arr.length === 0) return 0; // Tránh chia cho 0
    let avgOfArrayNumber= sumArray(arr)/(arr.length);
    return avgOfArrayNumber;
}

// Sample usage
 console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

/**
 * Tổng hợp bài tập vòng lặp For #3 
1. Viết hàm isAscending nhận vào một mảng số và kiểm tra xem mảng đó có phải là dãy số tăng dần không. Trường hợp mảng chỉ có một phần tử hoặc
 mảng rỗng không được coi là mảng tăng dần.
2. Viết hàm isPrime nhận vào một số nguyên n và trả về true 
nếu n là số nguyên tố, ngược lại trả về false.
3. Viết hàm sumPrimes nhận vào hai số nguyên start và end, 
sau đó tính và trả về tổng của tất cả các số nguyên tố trong khoảng từ start đến end.
 */

/**
 * 1. Checks if an array is strictly ascending.
 *
 * @param {Array<number>} arr - The array to check
 * @returns {boolean} True if the array is ascending, false otherwise
 */
const isAscending = (arr) => {
    if (arr.length === 0 || arr.length === 1) {
        return false;
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                return false; // Nếu bất kỳ phần tử nào lớn hơn phần tử kế tiếp, mảng không tăng dần
            }
        }
        return true; // Nếu không có phần tử nào vi phạm, mảng là tăng dần
    }
};

// Sample usage
console.log(isAscending([1, 2, 3, 5])); // true

/**
 * 2. Checks if a number is prime.
 *
 * @param {number} n - The number to check
 * @returns {boolean} True if n is a prime number, false
 * - chia hết cho 1 và chính nó
 * otherwise
 */
const isPrime = (numberCheck) => {
    if (numberCheck <= 1) return false; // Các số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(numberCheck); i++) {
        if (numberCheck % i === 0) {
            return false; // Nếu tìm thấy một ước số, không phải là số nguyên tố
        }
    }
    return true; // Nếu không tìm thấy ước số nào, đây là số nguyên tố
};


// Sample usage
// console.log(isPrime(2)); // true

/**
 * 3. Sums all prime numbers in a given range.
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 * @returns {number} The sum of prime numbers in the range
 */
const sumPrimes  = (start , end) => {
  let sumPrimes =0;
    for (let i = start; i < end; i++) {
        if (isPrime(i)) {
          sumPrimes  +=i;
        }
    }
   return sumPrimes 
};
// Sample usage
// console.log(sumPrimes(10, 20)); // 60
