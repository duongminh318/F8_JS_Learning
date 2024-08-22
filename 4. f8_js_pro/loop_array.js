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

function countGreaterThan (arr, value){ 
    let countOfArray=0;
     // duyệt mảng
    for(let i=0; i<arr.length;i++){
        if(arr[i]>value)
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
function alternateSum  (arr, value){
    let total=0;
       // duyệt mảng
    for(let i=0; i<arr.length;i++){
      total+= (i%2===0)? arr[i]:-arr[i];
    }
    return total;
}
// Sample usage
// console.log(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
// console.log(alternateSum([1, 2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)
