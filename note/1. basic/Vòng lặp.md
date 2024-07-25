# 1. Vòng lặp for (lặp với điều kiện đúng)
  >> cú pháp
  for(<bieu_thuc_1>; <bieu_thuc_2>; <bieu_thuc_3>){
      --code--
  }

  - <bieu_thuc_1>: biến khởi tạo giá trị ban đầu
  - <bieu_thuc_2>: điều kiện để tiếp tục lặp
  - <bieu_thuc_3>: tăng giá trị của biến khởi tạo giá trị ban đầu

  VD: for(var i = 1; i < 5; i++){
      --code--
  }

  >> cách hoạt động 
  - <bieu_thuc_1>: chỉ chạy trong lần đầu tiên
  
  - (1) <bieu_thuc_1> --> <bieu_thuc_2> --> code --> <bieu_thuc_3> --> (2) <bieu_thuc_2> --> code --> <bieu_thuc_3> --> (3) <bieu_thuc_2> --> code --> <bieu_thuc_3>
    cứ tiếp tục như vậy đến khi biểu thức điều kiện sai

# 2. Vòng lặp for in (lặp qua key của đối tượng)
  >> cú pháp
  for(var <bieu_thuc_1> in <bieu_thuc_2>){
      --code--
  }

  - <bieu_thuc_1>: biến key <=> key của từng phần tử trong arr || obj
  - <bieu_thuc_2>: tên arr || obj muốn lặp

 VD: var arr1 = ['a', 'b', 'c', 'd']
     for (var index in arr1) {
         console.log(`${index}: ${arr1[index]}`)
     }
    
    --> 0: a
    --> 1: b
    --> 2: c
    --> 3: d

 VD: var arr2 = { a: 1, b: 2, c: 3, d: 4 }
     for (var key in arr2) {
         console.log(`${key}: ${arr2[key]}`)
     }    
    
    --> a: 1
    --> b: 2
    --> c: 3
    --> d: 4

>> cách hoạt động
- lặp qua hết tất cả các key của từng phần tử trong arr || obj

# 3. Vòng lặp for of (lặp qua value của đối tượng)
 >> cú pháp
 for(var <bieu_thuc_1> of <bieu_thuc_2>){
      --code--
 }

 - <bieu_thuc_1>: biến vaule <=> value của từng phần tử trong [arr]
 - <bieu_thuc_2>: tên arr 

 VD: var arr1 = ['a', 'b', 'c', 'd']
     for (var value of arr1) {
         console.log(value)
     }
    
    --> a
    --> b
    --> c
    --> d

 >> cách hoạt động
 - lặp qua hết tất cả các value của từng phần tử trong arr || obj

 >> Object.keys()
 - truyền vào một obj, trả về arr gồm các keys
 VD: var arr2 = { a: 1, b: 2, c: 3, d: 4 }
     console.log(Object.keys(arr2)) --> ['a', 'b', 'c', 'd']

 >> Object.values()
 - truyền vào một obj, trả về arr gồm các keys
 VD: var arr2 = { a: 1, b: 2, c: 3, d: 4 }
     console.log(Object.values(arr2)) --> [1, 2, 3, 4]

>> các dùng for để duyệt obj
- dùng Object.values() chuyển thành arr chứa các value rồi dùng for of

# 4. Vòng lặp while (lặp khi điều kiện đúng)
  >> cú pháp
  while(<dieu_kien>){
      --code--
  }

  >> cách hoạt động
  - nếu điều kiện đúng thì sẽ thực hiện các dòng code trong dấu {}

# 5. Vòng lặp do/while (lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng)
  >> cú pháp
  do{
      --code--
  }while(<dieu_kien>)

  >> cách hoạt động
  - lần đầu tiên sẽ thực hiện các dòng code trong dấu {} mà không cần xét điều kiện
    từ lần thứ hai trở đi nếu điều kiện đúng sẽ thực hiện các dòng code trong dấu {}

# 6. Câu lệnh Break và Continue 
  >> break
  - nếu break ở trong vòng lặp thì vòng lặp gần nhất đang chứa nó sẽ bị dừng không tiếp tục lặp nữa

  >> continue
  - tất cả các dòng code bên dưới continue sẽ được bỏ qua
  - nếu continue ở trong vòng lặp thì sẽ bỏ qua các dòng code bên dưới và tiếp tục vòng lặp mới

# 7. Vòng lặp lồng nhau
  >> VD:
  var myArr = [
      [1, 2],
      [3, 4],
  ]

  - dùng vòng lặp lồng in ra dãy số 1 2 3 4 từ mảng myArr

  for(var i = 0; i < myArr.length; i++){
      console.log(myArr[i])
      for(var j = 0; j < myArr[i].length; j++){
          console.log(myArr[i][j])
      }
  }

  >> kết quả:
  [1, 2]            (dòng 125 [vòng_lặp_bên_ngoài])
  1                 (dòng 127 [vòng_lặp_bên_trong])
  2                 (dòng 127)
  [3, 4]            (dòng 125)
  3                 (dòng 127)
  4                 (dòng 127)

  -> bỏ đi câu lệnh dòng 125 ta sẽ có được kết quả như mong muốn 1 2 3 4

# 8. Đệ quy
  - là một hàm gọi lại chính nó
  - phải xác định được [điểm_dừng] và [logic_tạo_ra_điểm_dừng]
  
  >> VD 1: đếm ngược
  function countDown(num){
      // [điểm_dừng]
      if(num === 0){     
          return
      }
      
      console.log(num)

      // [logic_tạo_ra_điểm_dừng]
      return countDown(num - 1)       
  }

  countDown(4)
  --> 1 
  --> 2 
  --> 3 
  --> 4

  >> VD 2: duyệt mảng
  function loopArr(start, end, arr) {
    // [điểm_dừng]
    if (start > end) {
        return
    }

    console.log(arr[start])

    // [logic_tạo_ra_điểm_dừng]
    return loopArr(start + 1, end, arr)
  }

  var arrA = ['a', 'b', 'c']
  loopArr(0, arrA.length - 1, arrA)
  --> a
  --> b
  --> c

  >> VD 3: giai thừa
  function tinhGiaiThua(number){
      // [điểm_dừng]
      if(number === 1){
          return 1
      }

      // [logic_tạo_ra_điểm_dừng]
      return number * tinhGiaiThua(number -1)
  }

  console.log(tinhGiaiThua(4))
  --> 24 = 1 * 2 * 3 * 4