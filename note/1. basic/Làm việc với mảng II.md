# 0. CallBack?
  >> là cái gì
  1. Là hàm
  2. Truyền qua đối số
  3. Được gọi lại (trong hàm nhận đối số)

# 1. forEach()
  >> cú pháp
  <tên_mảng>.forEach(function(<tham_số_1>, <tham_số_2>){
    --code--
  })

  >> các sử dụng
  - dùng để duyệt qua từng phần tử của mảng
  - tryền vào một callback
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại 
    + tham số 2: vị trí của phần tử hiện tại
  
  >> VD: 
  var arr1 = ['a', 'b', 'c']
  arr1.forEach(function(ele, index){
    console.log(ele, index)
  })

  --> a 0
  --> b 1
  ---> c 2
  
# 2. every()
  >> cú pháp
  <tên_mảng>.every(function(<tham_số_1>, <tham_số_2>){
    return <diều_kiện>
  })

  >> cách sử dụng
  - dùng để kiểm tra [tất_cả] các phần tử phải thỏa mãn điều kiện
  - trả về giá trị true hoặc false
  - nếu gặp một phần tử không thỏa mãn điều kiện thì sẽ dừng và trả về false
  - nếu tất cả các phần tử đều thỏa mãn điều kiện thì sẽ trả về true
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại
    + tham số 2: vị trí của phần tử hiện tại
  
  >> VD 1
  var arr2 = [1, 2, 3]
  var trueFalse = arr2.every(function(ele, index){
      console.log(ele, index)
      return ele > 0;
  })
  console.log(trueFalse)

  --> 1 0
  --> 2 1
  --> 3 2
  ---> true

  >> VD 2
  var arr2 = [1, -2, 3]
  var trueFalse = arr2.every(function(ele, index){
      console.log(ele, index)
      return ele > 0;
  })
  console.log(trueFalse)

  --> 1 0
  --> -2 1
  ---> false

# 3. some()
  >> cú pháp
  <tên_mảng>.some(function(<tham_số_1>, <tham_số_2>){
    return <diều_kiện>
  })

  >> cách sử dụng
  - dùng để kiểm tra chỉ cần [1_phần_tử] thỏa mãn điều kiện
  - trả về giá trị true hoặc false
  - nếu gặp một phần tử thỏa mãn điều kiện thì sẽ dừng và trả về true
  - nếu tất cả các phần tử đều không thỏa mãn điều kiện thì sẽ trả về false
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại
    + tham số 2: vị trí của phần tử hiện tại
  
  >> VD 1
  var arr2 = [-1, 2, -3]
  var trueFalse = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele > 0;
  })
  console.log(trueFalse)

  --> -1 0
  --> -2 1
  ---> true

  >> VD 2
  var arr2 = [-1, -2, -3]
  var trueFalse = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele > 0;
  })
  console.log(trueFalse)

  --> -1 0
  --> -2 1
  --> -3 2
  ---> false

# 4. find()
  >> cú pháp
  <tên_mảng>.find(function(<tham_số_1>, <tham_số_2>){
    return <diều_kiện>
  })

  >> cách sử dụng
  - dùng để tìm một phần tử thỏa mãn điều kiện đầu tiên
  - trả về phần tử
  - nếu gặp một phần tử thỏa mãn điều kiện thì sẽ dừng và trả về phần tử đó
  - nếu tất cả các phần tử đều không thỏa mãn điều kiện thì sẽ trả về undefined
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại
    + tham số 2: vị trí của phần tử hiện tại
  
  >> VD 1
  var arr2 = ['a', 'X', 'X']
  var eleTrue = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele === 'X';
  })
  console.log(eleTrue)

  --> a 0
  --> X 1
  ---> X

  >> VD 2
  var arr2 = ['a', 'b', 'c']
  var trueFalse = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele === 'X';
  })
  console.log(trueFalse)

  --> a 0
  --> b 1
  --> c 2
  ---> undefined

# 5. filter()
  >> cú pháp
  <tên_mảng>.filter(function(<tham_số_1>, <tham_số_2>){
    return <diều_kiện>
  })

  >> cách sử dụng
  - dùng để tìm các phần tử thỏa mãn điều kiện
  - trả về mảng chứa các phần tử thỏa mãn điều kiện
  - không có phần tử nào thỏa mãn điều kiện sẽ trả về mảng rỗng []
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại
    + tham số 2: vị trí của phần tử hiện tại
  
  >> VD 1
  var arr2 = ['X', 'X', 'a']
  var eleTrue = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele === 'X';
  })
  console.log(eleTrue)

  --> X 0
  --> X 1
  --> a 2
  ---> ['X', 'X']

  >> VD 2
  var arr2 = ['a', 'b', 'c']
  var trueFalse = arr2.some(function(ele, index){
      console.log(ele, index)
      return ele === 'X';
  })
  console.log(trueFalse)

  --> a 0
  --> b 1
  --> c 2
  ---> []

# 6. map()
  >> cú pháp
  <tên_mảng>.map(function(<tham_số_1>, <tham_số_2>){
    -- làm gì đó với tham số 1 và 2 --
    return <thứ_gì_đó>
  })

  >> cách sử dụng
  - dùng khi sử dụng dữ liệu của mảng cũ làm gì đó
    và trả về mảng mới có số phẩn tử == mảng cũ
    giá trị của các phần tử trong mảng mới sẽ là giá trị return của callback 
  - mỗi lần duyệt qua một phần tử sẽ gọi callback
  - ý nghĩa các tham số của callback:
    + tham số 1: phần tử hiện tại
    + tham số 2: vị trí của phần tử hiện tại 
  >> VD:
  var arr = ['a', 'b', 'c']
  var arrNew = arr.map(function (ele, index) {
    return ele = ele.toUpperCase(ele);
  })
  console.log(arrNew) -->   ['A', 'B', 'C']

# 7. reduce()
  >> cú pháp
  <tên_mảng>.reduce(<callBack>, <giá_trị_của_biến_lưu_trữ>){
    return <biểu_thức_logic_tích_trữ>
  }

  >> cách sử dụng
  - dùng để tính lũy một giá trị nào đó
  - ý nghĩa các tham số của callback:
    + tham số 1: biến lưu trữ
    + tham số 2: phần tử hiện tại
    + tham số 3: vị trí của phần tử hiện tại

  >> VD:
  var arr = [1, 2, 3]
  var tong = arr.reduce(function (tong , ele, index) {
      return tong + ele
  }, 0)
  console.log(tong) --> 6

# 8. String/Array includes() method
  >> cú pháp
  <string/array>.includes(<tham_số_1>, <tham_số_2>)

  >> cách sử dụng
  - tìm thấy --> true, không tìm thấy --> false
  - tham số 1: giá trị cần tìm kiếm
  - tham số 2: vị trí bắt đầu tìm kiếm (mặc định là 0)

  >> VD string:
  var name = 'Tran Trong Nam'
  console.log(name.includes('Nam')) --> true
  console.log(name.includes('Trang')) --> false

  >> VD array
  var name = ['Nam', 'Tuan', 'Quang']
  console.log(name.includes('Quang')) --> true
  console.log(name.includes('Nam', 1)) --> false
  
  





# 9. Empty elements of array?
  - khi mảng không có phần tử nào mà dùng phương thức length để xét độ dài cho mảng (vD bằng 10)
    nếu dùng vòng lặp for thì vẫn lặp 10 lần mặc dù mảng không có phần tử nào
  - vì vậy khi duyệt mảng nên dùng không nên dùng for
  - nền dùng forin, forof, forEach để duyệt mảng