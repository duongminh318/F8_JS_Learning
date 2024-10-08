# 1. Các cách tạo mảng
  >> Cách 1: dùng dấu []
  VD: var arrA = [
      'Duong Khoi Minh',
      18,
      null,
      false,
      function(){},
  ]
  >> Cách 2: dùng new Array()
  VD: var arrA = new Array(
      'Duong Khoi Minh',
      18,
      null,
      false,
      function(){},
  )
  
  - nên dùng cách số 1
  - không nên dùng cách số 2 vì: 
    + dài dòng hơn
    + phải khởi tạo một đối tượng nên sẽ chậm hơn

# 2. Các tính chất của mảng  
  - mỗi phần tử của mảng cách nhau bằng dấu phẩy
  - các phần tử được đánh vị trí tự động bắt đầu từ 0
  - phần tử trong mảng có thể là tất cả các kiểu dữ liệu
  - Array.isArray(): kiểm tra xem có phải là mảng hay không= true

# 3. Truy xuất mảng
  >> length
  - kiểm tra độ dài mảng hay số phần tử trong mảng
  
  VD: arrA.length --> 5

  >> lấy giá trị theo vị trí
  - cú pháp: <tên_mảng>[ <vị_trí_của_gián_trị_cần_lấy> ]

  VD: arrA[0] --> 'Duong Khoi Minh'

# 4. Làm việc với mảng
  - keyword: js array methods
  - các thuộc tính và phương thức thường dùng

  var arrABC = ['a', 'b', 'c']

  >> toString()
  + dùng để chuyển sang kiểu chuỗi, và mỗi phần tử sẽ được cách nhau bằng dấu phẩy

  VD: arrABC.toString() --> 'a,b,c'

  >> join()
  + giống với toString(), những có thể thay đổi ký tự giữa các phần tử
  + tham số 1: ký tự giữa các phần tử 

  VD: arrABC.join('-') --> 'a-b-c'

  >> pop()
  + xóa phần tử cuối mảng và trả về phần tử đã xóa
  + khi mảng không có phần tử sẽ trả về undefined

  VD: arrABC.pop() --> c

  >> shift()
  + giống với pop() nhưng xóa đi phần tử đầu mảng

  >> push()
  + thêm một hoặc nhiều phẩn tử và cuối mảng và trả về độ dài mới của mảng
  + tham số 1: phần tử muốn thêm vào, mỗi phần tử cách nhau bằng dấu phẩy

  VD: arrABC.push('c', 'd') --> 5  

  >> unshift()
  + giống với push() nhưng thêm phần tử vào đầu mảng

  >> splice()
  + dùng để xóa, thay thế, chèn phần tử, cắt và trả về mảng có phần tử xóa
  + tham số 1: vị trí bắt đầu
  + tham số 2: số lượng phần tử muốn xóa
  + thám số 3+: phần tử muốn chèn

  var arrABC = ['a', 'b', 'c']

  VD: arrABC.splice(1, 1) 
      - trả về --> ['b']
      - mảng sau khi xóa  --> ['a', 'c']

  VD: arrABC.splice(1, 0, 'X', 'Y') 
      - trả về --> []
      - mảng sau khi chèn  --> ['a', 'X', 'Y', 'b', 'c']

  VD: arrABC.splice(1, 1, 'X') 
      - trả về --> ['b']
      - mảng sau khi thay  --> ['a', 'X', 'c']s

  >> concat()
  + dùng để gộp 2 mảng thành 1 mảng, trả về đã gộp
  + cú pháp <mảng_gốc>.concat(<mảng_gộp>)

  var arrABC = ['a', 'b', 'c']
  var arrXYZ = ['x', 'y', 'z']

  VD: arrABC.concat(arrXYZ) --> ['a', 'b', 'c', 'x', 'y', 'z']

  VD: arrXYZ.concat(arrABC) --> ['x', 'y', 'z', 'a', 'b', 'c']

  >> slice()
  + dùng để cắt một hoặc nhiều phần tử trong mảng, trả về mảng chứa các phần tử vừa cắt
  + tham số 1: vị trí bắt đầu
  + tham số 2: vịt trí kết thúc

  VD: arrABC.slice(1, 2) -->  ['b']
  VD: arrABC.slice(0) --> ['a', 'b', 'c']

  >> flat
  + Làm phẳng mảng với mức độ cụ thể
  
  + ![alt](https://files.fullstack.edu.vn/f8-prod/public-images/6614ba3dc743f.png)

  + syntax: let newArray = oldArray.flat(depth);
  + depth là mức độ làm phẳng, mặc định là 1. Để làm phẳng tối đa mảng, sử dụng giá trị Infinity.
  + Exaple:

      // Làm phẳng mảng với độ sâu 1

      const arr1 = [1, 2, [3, 4]];
      const newArr1 = arr1.flat();
      // hoặc: const newArr1 = arr1.flat(1);

      console.log(newArr1);   //(4)[1, 2, 3, 4]

      // Làm phẳng mảng với độ sâu 2

      const arr2 = [1, 2, [3, 4, [5, 6]]];
      const newArr2 = arr2.flat(2);

      console.log(newArr2);   //(6) [1, 2, 3, 4, 5, 6]
  
  + Sử dụng Infinity để làm phẳng toàn bộ các mảng con.

      let deeplyNested = [1, [2, [3, [4, [5]]]]];

      let completelyFlat = deeplyNested.flat(Infinity);

      console.log(completelyFlat);


