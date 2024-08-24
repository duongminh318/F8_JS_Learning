/**
 * Finds the most frequent number in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The most frequent number
 */
function findMostFrequentNumber(numbers) {
    let frequency = {}; // Tạo một đối tượng để lưu tần suất xuất hiện của từng số
    let maxCount = 0; // Biến để lưu trữ tần suất lớn nhất
    let mostFrequent = numbers[0]; // Biến để lưu trữ số xuất hiện nhiều nhất, khởi tạo với phần tử đầu tiên của mảng
    for (let i = 0; i < numbers.length; i++) { // Duyệt qua từng phần tử của mảng numbers
        let number = numbers[i]; // Lấy số hiện tại từ mảng
        if (frequency[number]) { // Nếu số hiện tại đã có trong đối tượng frequency
            frequency[number]++; // Tăng tần suất xuất hiện của số đó lên 1, tăng value
        } else {
            frequency[number] = 1; // Nếu số hiện tại chưa có trong đối tượng frequency, khởi tạo tần suất là 1
        }
        if (frequency[number] > maxCount) { // Nếu tần suất của số hiện tại lớn hơn tần suất lớn nhất đã lưu trữ
            maxCount = frequency[number]; // Cập nhật tần suất lớn nhất
            mostFrequent = number; // Cập nhật số xuất hiện nhiều nhất
        }
    }
    return mostFrequent; // Trả về số xuất hiện nhiều nhất
}
console.log(findMostFrequentNumber([3, 3, 2, 2, 1, 1, 2])); // Output: 2