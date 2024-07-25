# 1. Các cách tạo chuỗi
  >> Cách 1: var fullName = 'Tran Trong Nam'
  >> Cách 2: var fullName = new String('Tran Trong Nam')
  
  - nên đùng cách số 1
  - không nên dùng cách số 2 vì: 
    + dài dòng hơn
    + kiểu dữ liệu sẽ là object không phải string
    + phải khởi tạo một đối tượng nên sẽ chậm hơn

# 3. Template string ES6
  - Sử dụng dấu ``
  - đưa 1 biến vào trong chuỗi: ${}
  VD: console.log(`tôi là: ${fullName}`)

# 4. Làm việc với chuỗi
  - Keyword: js string methods
  - Một số thuộc tính và phương thức hay dùng
    >> length
    + trả về độ dài của một chuỗi
    VD: fullName.length --> 14

    >> indexOf()
    + dùng để tìm vị trí
    + tham số thứ 1: chuỗi cần tìm kiếm
    + tham số thứ 2: vị trí bắt đầu tìm kiếm
      nếu không truyền sẽ mặc định = 0
    + tìm từ trái qua phải 
    + không tìm thấy sẽ trả về -1
    VD_1: fullName.indexOf('trong') --> 5
    VD_2: fullName.indexOf('n') --> 3
    VD_3: fullName.indexOf('n', 5) --> 8
    VD_4: fullName.indexOf('dep trai') --> -1

    >> lastIndexOf()
    + giống với indexOf nhưng tìm kiếm từ phải qua trái

    >> slice()
    + dùng để cắt chuỗi
    + tham số thứ 1: vị trí bắt đầu
    + tham số thứ 2: vị trí kết thúc (mặc định là vị trí cuối cùng)
    + cắt từ trái -> phải: 0, 1, 2, 3
    + cắt từ phải -> trái: 0, -1, -2, -3

    VD_1: fullName.slice(5, 10) --> 'Trong'
    VD_2: fullName.slice(-3) --> 'Nam'

    >> replace()
    + dùng để thay thế chuỗi
    + tham số thứ 1: chuỗi muốn tìm kiếm
    + tham số thứ 2: chuỗi muốn thay thế

    VD_1: fullName.replace('Nam', 'Minh') --> 'Tran Trong Minh'
    VD_2: fullName.replace('n', '99') --> 'Tra99 Trong Nam'
    VD_3: fullName.replace(/n/g, '99') --> 'Tra99 Tro99g Nam'

    >> toUpperCase()
    + dùng để chuyển tất cả thành chữ in hoa

    VD: fullName.toUpperCase() --> TRAN TRONG NAM

    >> toLowerCase()
    + dùng để chuyển tất cả thành chữ thường
    
    VD: fullName.toLowerCase() --> tran trong nam

    >> trim()
    + loại bỏ khoảng trắng ở hai đầu của chuỗi

    >> Split
    + dùng để chuyển đổi chuỗi thành một mảng
    + tham số thứ nhất: điểm chung để cắt

    VD_1: fullName.split(' ') --> ['Tran', 'Trong', 'Nam']
    VD_2: fullName.split('') --> ['T', 'r', 'a', 'n', ' ', 'T', 'r', 'o', 'n', 'g', ' ', 'N', 'a', 'm']

    >> charAt()
    + lấy ra ký tự dự vào index

    VD: fullName.charAt(0) --> T
    VD: fullName.charAt(11) --> N