/**
 * Viết hàm findMostFrequentNumber nhận vào một mảng số và trả về số xuất hiện 
 * nhiều nhất trong mảng đó. 
 * Nếu có nhiều số xuất hiện với cùng số lần, trả về số đầu tiên tìm thấy.
 */

/**
 * Finds the most frequent number in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The most frequent number
 */
const findMostFrequentNumber = (arr) => {
    if (arr.length === 0) return null; // Nếu mảng rỗng, trả về null

    const frequencyMap = {}; // Tạo một đối tượng để lưu tần suất xuất hiện của từng số
    let maxFrequency = 0; // Biến để lưu tần suất lớn nhất
    let mostFrequentNumber = arr[0]; // Biến để lưu số xuất hiện nhiều nhất, khởi tạo bằng số thứ nhất

    //duyệt mảng
    for (let num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++; // Nếu số đã tồn tại trong frequencyMap, tăng tần suất lên 1
        } else {
            frequencyMap[num] = 1; // Nếu số chưa tồn tại trong frequencyMap, khởi tạo tần suất là 1
        }

        // Kiểm tra xem số hiện tại có tần suất cao hơn số đã lưu trước đó không
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentNumber = num;
        }
    }

    return mostFrequentNumber; // Trả về số xuất hiện nhiều nhất
}

// Sample usage for findMostFrequentNumber
console.log(findMostFrequentNumber([1, 2, 3, 4, 2, 2, 3, 2])); // Expected output: 2

/** SỬ DỤNG OBJECT THAY THẾ CHO SWITCH */

// cách 1
function calculate(operation, a, b) {
    const operations = {
        add: a + b,
        subtract: a - b,
        multiply: a * b,
        divide: b === 0 ? 'Cannot divide by zero.' : a / b
    };

    // Tìm và thực hiện phép toán; nếu không tìm thấy, hiển thị thông báo lỗi
    return operations[operation] ?? 'Operation not recognized. Please use add, subtract, multiply, or divide.';
}

// Testing the function
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 3));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 9, 3));
console.log(calculate('divide', 5, 0));
console.log(calculate('modulus', 5, 3));

// cách 2
function calculate(operation, a, b) {
    const operations = {
        add: () => a + b,
        subtract: () => a - b,
        multiply: () => a * b,
        divide: () => b === 0 ? 'Cannot divide by zero.' : a / b
    };

    // Tìm và thực hiện phép toán; nếu không tìm thấy, hiển thị thông báo lỗi
    const action = operations[operation];
    return action ? action() : 'Operation not recognized. Please use add, subtract, multiply, or divide.';
}

// Testing the function
console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 5, 3));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 9, 3));
console.log(calculate('divide', 5, 0));
console.log(calculate('modulus', 5, 3));


/** SO SÁNH 2 OBJECT */
// json.stringgify
let student1 = { id: 1, name: "Bob" };
let student2 = { id: 1, name: "Bob" };

console.log(JSON.stringify(student1) === JSON.stringify(student2));// --> true

//lodash.com
//<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

  let obj1 = { part: { id: 10, name: 'Top' } };
  let obj2 = { part: { id: 10, name: 'Top' } };

  console.log(_.isEqual(obj1, obj2)); // true
