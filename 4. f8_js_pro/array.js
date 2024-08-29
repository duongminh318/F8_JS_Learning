/**
 * 1. Tạo ra một mảng các số nguyên từ start đến end (bao gồm cả start và end).
 *
 * @param {number} start - Điểm bắt đầu của khoảng
 * @param {number} end - Điểm kết thúc của khoảng
 * @returns {Array<number>} Một mảng chứa tất cả các số nguyên từ start đến end
 */
function createRange(start, end) {
    let range = []; // Khởi tạo mảng trống để lưu trữ dãy số
    for (let i = start; i <= end; i++) { // Duyệt qua các số từ start đến end
        range.push(i); // Thêm từng số vào mảng range
    }
    return range; // Trả về mảng chứa các số từ start đến end
}

// Sử dụng hàm tạo dãy số
console.log(createRange(1, 5)); // Output: [1, 2, 3, 4, 5]

/**
 * 2. Loại bỏ các phần tử trùng lặp trong mảng.
 *
 * @param {Array} arr - Mảng ban đầu
 * @returns {Array} Một mảng mới không chứa các phần tử trùng lặp
 */
function removeDuplicates(arr) {
    let unique = []; // Khởi tạo mảng trống để lưu trữ các phần tử duy nhất
    for (let i = 0; i < arr.length; i++) { // Duyệt qua từng phần tử trong mảng đầu vào
        if (!unique.includes(arr[i])) { // Kiểm tra xem phần tử đã có trong mảng unique chưa
            unique.push(arr[i]); // Nếu chưa có, thêm phần tử vào mảng unique
        }
    }
    return unique; // Trả về mảng chỉ chứa các phần tử duy nhất
}

// Sử dụng hàm loại bỏ phần tử trùng lặp
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

/**
 * 3. Tìm tất cả các cặp số trong mảng có tổng bằng với một giá trị cụ thể.
 *
 * @param {Array<number>} arr - Mảng để tìm kiếm các cặp số
 * @param {number} sum - Tổng mục tiêu
 * @returns {Array<Array<number>>} Một mảng chứa các cặp số có tổng bằng với giá trị mục tiêu
 */
function findPairsWithSum(arr, sum) {
    let pairs = []; // Khởi tạo mảng trống để lưu trữ các cặp số thỏa mãn
    for (let i = 0; i < arr.length; i++) { // Duyệt qua từng phần tử trong mảng
        for (let j = i + 1; j < arr.length; j++) { // Duyệt qua từng phần tử tiếp theo sau phần tử i
            if (arr[i] + arr[j] === sum) { // Kiểm tra nếu tổng của hai phần tử bằng với giá trị mục tiêu
                pairs.push([arr[i], arr[j]]); // Nếu đúng, thêm cặp số vào mảng pairs
            }
        }
    }
    return pairs; // Trả về mảng chứa các cặp số có tổng bằng với giá trị mục tiêu
}

// Sử dụng hàm tìm cặp số
console.log(findPairsWithSum([1, 2, 3, 4, 5], 5)); // Output: [[1, 4], [2, 3]]
