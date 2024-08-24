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