# 1. Tham trị
  >> Các kiểu dữ liệu
  - String
  - Number
  - Boolean
  - undefined
  - null
  - BigInt (ít dùng)
  - Symbol (ít dùng)

  >> Cách hoạt động
  let a = 111
  let b = a
  a = 888
  console.log(b)   //111

  > giải thích: 
    + let a = 111
      tạo ra biến a, cấp phát một ô nhớ có địa chỉ là #001 và giá trị là 111
      gán giá trị của ô nhớ cho biến a 
    
    + let b = a
      tạo ra biến b, cấp phát một ô nhớ có địa chỉ là #002 và giá trị là 111 (sao chép từ biến a)
    
    + a = 888
      tìm đến địa chỉ ô nhớ của biến a là #001 và thay đổi giá trị ô nhớ thành 888

    --> vì biến b chỉ sao chép giá trị của biến a để lưu vào giá trị ô nhớ của mình
        giá trị của biến a, b được lưu vào hai địa chỉ khác nhau, hai ô nhớ khác nhau

# 2. Tham chiếu
  >> Các kiểu dữ liệu
  - Object
  - Array
  - Function

  >> Cách hoạt động
  let x = {age: 18}
  let y = x
  x.age = 19
  console.log(y)   // {age: 19}

  > Giải thích
    + let x = {age: 18}
      tạo ra biến x, cấp phát một ô nhớ có địa chỉ là #003 và giá trị là {age: 18}
      [gán_địa_chỉ_của_ô_nhớ_cho_biến_x] 
    
    + let y = x
      tạo ra biến y, gián địa chỉ ô nhớ của của biến x là #003 cho biến y 
      vì biến x đang lưu địa chỉ ô nhớ không phải lưu giá trị ô nhớ

    + x.age = 19
      tìm đến địa chỉ ô nhớ của biến x là #003 và thay đổi giá trị ô nhớ thành {age: 19}

    --> x và y cùng trỏ vào cùng 1 địa chỉ #003 nên cùng 1 ô nhớ
        nên khi thay đổi x thì y cũng bị thay đổi

  >> trường hợp obj/arr chứa obj/arr con
  - Mỗi một obj/arr sẽ được lưu trữ tại một vùng nhớ khác nhau, cho dù nó có là cha hay con
  VD: const student = {
        name: 'Tran Nam',
        profile: {
          firstName: 'Nam',
          lastName: 'Tran',
          introduction: 'boy'
        }
      }

  Biến    | địa chỉ ô nhớ | giá trị ô nhớ
          | #004          | {firstName: 'Nam', lastName: 'Tran', introduction: 'boy'}
  student | #005          | {name: 'Tran Nam', profile: #004}

# 3. Tham chiếu, tham trị với hàm
  >> tham trị
  function logger(a){
    a = 88
    console.log(a)
  }

  const x = 1

  logger(x)       // 88
  console.log(x)  // 1

  > giải thích
  - vì là kiểu tham trị nên biến x lưu giá trị của ô nhớ
    nên truyền vào giá trị của ô nhớ (là 1)
  - biến a được cấp phát một ô nhớ và có giá trị là 1
  - biến a và biến x trỏ đến hai địa chỉ, hai ô nhớ khác nhau
    nên a thay đổi giá trị, không ảnh hưởng đến giá trị biến x

>> tham chiếu
function logger(obj){
    obj.age = 19
    console.log(obj)
  }

  let x = {age: 18}

  logger(x)       // {age: 19}
  console.log(x)  // {age: 19}

  > giải thích
  - vì là kiểu tham chiếu nên biến x lưu địa chỉ ô nhớ
    nên truyền vào hàm địa chỉ ô nhớ của biến x
  
  - vậy nên biến obj trong hàm và biến x ngoài hàm đều là một vì cùng chỉ vào một địa chỉ
    obj.age = 19   <=>   x.age = 19



