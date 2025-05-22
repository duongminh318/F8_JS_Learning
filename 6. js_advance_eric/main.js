//  bất đồng bộ
// console.log("hello");

// setTimeout(() => {
//   console.log("⏱️ Đây là dòng bên trong setTimeout (chạy sau)");
// }, 1000); // Chạy sau 1000ms (1 giây)

// console.log("hello2");
// console.log("hello3");
// console.log("hello4");


// httprequest
// Khởi tạo một đối tượng XMLHttpRequest để gửi yêu cầu HTTP
// var xhttp = new XMLHttpRequest();

// // Gán hàm xử lý khi trạng thái của yêu cầu (request) thay đổi
// xhttp.onreadystatechange = function() {
//   // Kiểm tra nếu yêu cầu đã hoàn tất (readyState = 4) và phản hồi thành công (status = 200)
//   if (this.readyState == 4 && this.status == 200) {
//     // In ra dữ liệu server trả về (dạng chuỗi JSON)
//     console.log(">>> check res", xhttp.responseText);

//     // Chuyển chuỗi JSON thành đối tượng JavaScript
//     const data = JSON.parse(xhttp.responseText);

//     // In ra dữ liệu đã xử lý (object)
//     console.log("✅ Dữ liệu:", data);
//   }
// };

// // Cấu hình yêu cầu:
// // - Phương thức: "GET"
// // - URL: endpoint của API
// // - true: gửi yêu cầu bất đồng bộ (không chặn dòng tiếp theo)
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// // Gửi yêu cầu đến server
// xhttp.send();

// chỉ in ra request
// Khởi tạo một đối tượng XMLHttpRequest để gửi yêu cầu HTTP
var request = new XMLHttpRequest();

// Gán hàm xử lý khi trạng thái của yêu cầu (request) thay đổi
request.onreadystatechange = function() {
  // Kiểm tra nếu yêu cầu đã hoàn tất (readyState = 4) và phản hồi thành công (status = 200)
  if (this.readyState == 4 && this.status == 200) {
    // In ra dữ liệu server trả về (dạng chuỗi JSON)
    console.log(">>> check res", request);

    // Chuyển chuỗi JSON thành đối tượng JavaScript
    // const data = JSON.parse(request);

    // In ra dữ liệu đã xử lý (object)
    // console.log("✅ Dữ liệu:", data);
  }
};

// Cấu hình yêu cầu:
// - Phương thức: "GET"
// - URL: endpoint của API
// - true: gửi yêu cầu bất đồng bộ (không chặn dòng tiếp theo)
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// Gửi yêu cầu đến server
request.send();
