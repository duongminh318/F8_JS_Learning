# 1. What
  > đưa phần khai báo lên trên cùng của phạm vi
  > vì sao phải hoisting
  {
      var name = 'Trọng Nam'
      {
          console.log(name)
          var name = 'Trong Nam'
      }
  }
  > biến name được hoisting nên ở dòng 7 sẽ tìm đc biến name không ra ngoài tìm nữa

# 2. var
  console.log(name)             // undefined
  var name = 'Trần Trọng Nam'   
  console.log(name)             // Trần Trọng Nam

  - vì biến var được đưa lên trên cùng
    nên dòng 3 không thông báo lỗi là biến name chưa khởi tạo
    mà in ra undefined (biến chưa gán giá trị)

# 3. function declaration
  console.log(sum(5, 10))       // 15
  function sum(a, b){
      return a + b
  }

  - vì function declaration được đưa lên trên cùng
    nên dòng 14 không thông báo lỗi là biến hàm không tồn tại
    mà in ra 15

# 4. let, const
  > vẫn được hoisted nhưng lại bị đưa vào "Temporal Deal Zone" nên xuất hiện lỗi
  console.log(name)             // lỗi không thể truy cập
  let name = 'Trần Trọng Nam'   
  console.log(name)             // Trần Trọng Nam
