# 1. let, const
  >> var VS let, const
  - Scope (phạm vi truy cập)
    + var: bên trong function(){}
    + let, const: bên trong code block {}
  
  - Hosting (đưa lên trên đầu)
    + var: được hỗ trợ
    + let, const: không được hỗ trợ

  >> const VS var, let
  - Assignment (gán lại) 
    + const: không thể gán lại lần thứ 2
    + var, let: có thể gán lại nhiều lần

# 2. Template literalsss
  - dùng dấu ``
  - thêm biến vào chuỗi dùng ${}
  - viết như nào thì in ra i hịt như zậy

# 3. Arrow function
  - cách viết gắn gọn hơn
  - không có context, không nên dùng từ khóa this bên trong 
  - không thể làm constructor function

# 4. Classes
  - cách viết khác của constructor function, tường minh hơn

    class Course {
      constructor(name, price){
          this.name = name
          this.price = price
      }

      getName() {
        return this.name
      }

    }

  const java = new Course('java', 2000)
  console.log(java)

# 5. Default parameter values
  - định nghĩa giá trị mặc định cho những tham số
  VD: function logger(log = 'log mặc định'){
        console.log(log)
      }

      logger() --> log mặc định

# 6. Enhanced object literals
  >> định nghĩa key: value cho object ngắn gọn hơn
  VD: let name = 'JS'
      let price = 1000
      let course = {
        name,   // name: name
        price   // price: price
      }
      console.log(course) --> {name: 'JS', price: 1000}

  >> định nghĩa method cho object
  VD: let name = 'JS'
      let course = {
        name,   // name: name
        getName() {
          return name
        }
        // tương đương với: 
        // getName: function(){
        //    return name
        // }
      }
      console.log(course.getName()) --> JS

  >> định nghĩa key cho object dưới dạng biến
  let keyName = 'name'
  let keyPrice = 'price'
  let course = {
      [keyName]: 'JS',
      [keyPrice]: 1000  
  }
  console.log(course) --> {name: 'JS', price: 1000}

# 7. Destructuring
  - lấy ra các phần tử từ arr, obj
  VD: let arr = [1, 2, 3]
      let [a, b, c] = arr
      // tương đương với:
      // let a = arr[0]
      // let b = arr[1]
      // let c = arr[2]
      console.log(a, b, c)   --> 1 2 3 

  VD: let obj = {name: 'trần trọng nam', age: 19}
      let {name, age} = obj
      // tương đương với:
      // console.log(obj.name, obj.age)
      console.log(name, age) --> trần trọng nam 19

  - cách gán lại tên
  VD: let obj = {name: 'trần trọng nam', age: 19}
      let {name: fullName} = obj
      
      console.log(fullName) --> trần trọng nam

  - cách gán giá trị mặc định
  VD: let obj = {name: 'trần trọng nam', age: 19}
      let {address = 'tuyên quang'} = obj

      console.log(address) --> tuyên quang

# 8. Toán tử ... (Rest)
  >> lấy ra phần còn lại
  let arr = [1, 2, 3]

  let [a, ...phanConLai] = arr
  console.log(phanConLai)  --> [2, 3]

  >> nhận vào vô số tham số
  function logger(...log){
    console.log(log)
  }
  logger(1,2,3,4) --> [1, 2, 3, 4]

# 9. Toán tử ... (Spread)
  - khi để ... trước arr hoặc obj sẽ bỏ đi [], {}

  >> nối arr
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5, 6]
  let arr3 = [...arr1, ...arr2]
  console.log(arr3) --> [1, 2, 3, 4, 5, 6]

  >> hợp nhất obj
  let obj1 = {name: 'tran trong nam'}
  let obj2 = {age: 19}
  let obj3 = {...obj1, ...obj2}
  console.log(obj3) --> {name: 'tran trong nam', age: 19}

  >> truyền đối số
  let arr = [1, 2, 3]
  function tinhTong(a, b, c){
    return a + b + c
  }

  tinhTong(...arr) --> 6

  >> sao chép
  const person1 = {
    name: 'Son',
    age: 21
  }
  const person2 = {...person1}

  console.log(person2) --> {name: 'Son', age: 21}

# 10. Tagged template literals
  const func = (...rest)=>{
           console.log(rest)
        }

  let brand = 'F8'
  let course = 'JavaScript'

  func`Học lập trình ${course} tại ${brand} thật dễ hiểu` 

  --> (3) [Array(3), 'JavaScript', 'F8']
      0: ['Học lập trình ', ' tại ', ' thật dễ hiểu']
      1: "JavaScript"
      2: "F8"

# 11. Optional chaining (?.)
  const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };

  console.log(adventurer.cat.name) --> Dinah
  console.log(adventurer.catttt.name) --> lỗi chương trình
  console.log(adventurer.catttt?.name) --> undefined

  - kiểm tra nếu có cat thì mới .name, không có trả về undefined

