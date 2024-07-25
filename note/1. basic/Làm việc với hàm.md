# 1. Tính chất
   - không thực thi khi định nghĩa
   - sẽ thực thi được khi gọi
   - có thể nhận tham số
   - có nhận và trả về 1 giá trị

# 2. Tham số và đối số trong hàm
  >> Tham số và đối số là gì ?
  - [tham_số] là giá trị đầu vào khi [định_nghĩa] hàm
  - [đối_số] là giá trị truyền vào khi [gọi] hàm
  - có thể là tất cả các kiểu dữ liệu
  - chỉ có thể sử dụng bên trong hàm
  - các tham số hay đối số cách nhau bằng dấu [,]
  - khi sử dụng tham số trong hàm, mà đối số không truyền vào thì tham số đó sẽ có giá trị là undefined
  >> Đối tượng arguments
  - chỉ dùng được bên trong hàm
  - nhận vô số đối số
  - tham số nhận được sẽ là 1 mảng
  VD: function writeLog(){
      console.log(arguments)
  }

  writeLog('log 1', 'log 2', 'log 3')
  --> Arguments(3) ['log 1', 'log 2', 'log 3']

# 3. Từ khóa return trong hàm
  - nếu không return thì kết quả của hàm sẽ là undefined
  - tất cả các dòng code bên dưới return sẽ không được chạy
  - có thể trả về tất cả các kiểu dữ liệu
  
# 4. Hiểu hơn về hàm
  - Khi đặt hàm trùng tên thì hàm định nghĩa sau sẽ nghi đè hàm phía trước
  - có thể khai báo biến trong hàm nhưng biến đó chỉ sử dụng được trong hàm
  - có thể định nghĩa hàm trong hàm nhưng hàm đó chỉ trong thể gọi bên trong hàm chứa nó 

# 5. Các loại hàm   
  >> Declaration function
    - bắt buộc phải đặt tên
    - có thể gọi trước khi được định nghĩa
  function tinhTong(){

  }

  >> Expresstion function
    - không bắt buộc phải đặt tên
    - không thể gọi trước khi được định nghĩa
  var tinhTong = function(){

  }

  setTimeout( function(){} )