# 1. IIFE là gì
  - là một biểu thức tạo ra một hàm và hàm đó được gọi ngay lập tức

# 2. Cú pháp
  ( 
    function(){
      --code--
    } 
  )()

  > code viết phía trước IIFE khi kết thúc phải có dấu chấm phẩy ;
  console.log('abc');
  ( 
    function(){
      --code--
    } 
  )()

  > các cách khác để viết IIFE
  - khi viết toán tử phía trước IIFE thì không cần dấu ; phía trước

  <toán_tử>( 
    function(){
      --code--
  })()

  VD: !(function(){
      --code--
      })()
  
  >>> Cách viết IIFE thường được dùng
  ;( 
    function(){
      --code--
    } 
  )()

# 3. IIFE là hàm "private"
  > không thể gọi hàm bên ngoài (), chỉ có thể gọi hàm bên trong ()

  VD: không thể gọi bên ngoài ()
  ;(function myFunc(){
      console.log('abc')
  })() 

  myFunc()  //--> lỗi

  VD: chỉ gọi được bên trong dấu ()
  let i = 0
  ;(function myFunc(){
      i++
      if(i === 10){
          return 10
      }
      console.log(i)
      myFunc()
  })()

  > không thể truy cập biến bên ngoài (), chỉ có thể truy cập biến bên trong ()

  VD: không thể truy cập biến bên ngoài ()
  ;(function myFunc(){
      let fullName = 'Tran Trong Nam'
  })() 
  console.log(fullName)

  VD: chỉ có thể truy cập biến bên ngoài ()
  ;(function myFunc(){
      let fullName = 'Tran Trong Nam'
      console.log(fullName)
  })() 

# 4. Sử dụng IIFE khi nào
  - tránh tạo ra quá nhiều biến toàn cục
    vì trong dự án lớn sẽ dễ đặt trung tên, ghi đè nhau, tạo ra nhiều lỗi không mong muốn

  - các thư viện dùng IIFE để khi nhúng vào, tên hàm, tên biến không ảnh hưởng đến dự án

  - sử dụng khi muốn code chạy ngay, nhưng biến và hàm không ở phạm vị toàn cục

  >> Ví dụ sử dụng IIFE
  const app = (function(){
      // private
      const cars = []
      
      return {
          get(index){
              return cars[index]
          },
          add(car){
              cars.push(car)
          },
          edit(index, car){
              cars[index] = car
          },
          delete(index){
              cars.splice(index, 1)
          }
      }
  })()