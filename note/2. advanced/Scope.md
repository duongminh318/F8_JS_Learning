# 1. Các loại phạm vi
  > Code block (khối mã): chỉ truy cập được bên trong dấu {}
    VD: let, const

  > Local scope (hàm): chỉ truy cập được bên trong hàm chưa nó
    VD: var, function

  > Global (toàn cục): truy cập được bất cứ đâu

# 2. Phạm vi hàm
  > khi gọi hàm sẽ tạo ra một phạm vi mới riêng biệt

# 3. Cách một biến được truy cập
  > lấy biến gần nhất
  {
    const num = 1
    {
        {
            const num = 2
            {
                console.log(num)
            }
        }
    }
  }

 > lỗi, tìm thấy biến gần nhất rồi, những biến đó đc gọi trược khi tạo 
 {
    const num = 1
    {
        {
            {
                console.log(num)
                const num = 2
            }
        }
    }
  }

# 4. Khi biến bị xóa khỏi bộ nhớ 
  > Global (toàn cục)
  - khi thoát chương trình

  > Code block (khối mã), Local scope (hàm)
  - khi chạy xong 

  > biến ở trong hàm được tham chiếu bởi hàm khác
  function makeCouter(){
      let couter = 0

      function increase(){
          return ++couter
      }

      return increase
  }

  const increase1 = makeCouter()

  console.log(increase1())   //1
  console.log(increase1())   //2
  console.log(increase1())   //3

  - biến couter chưa được xóa vì: 
    
    increase1 là biến toàn cục và increase1 <=> increase
    mà: 
    increase không trực tiếp tạo ra biến couter, đang sử dụng biến couter ở phạm vi bên ngoài (trong makeCouter)
    nên: 
    biến ở bên trong makeCouter vẫn được sử dụng ở một hàm khác đã được ở bên ngoài 
