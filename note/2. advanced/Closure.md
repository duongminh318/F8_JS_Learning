# 1. Closure
  > - một hàm có thể ghi nhớ nơi nó được tạo 
  > - truy cập được biến ở ngoài phạm vi của nó
  > - biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha được thực thi xong

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

  > Giải thích
  - ở dòng 17 gọi hàm makeCouter 1 lần --> tạo ra một phạm vi là bên trong dấu {} của makeCouter
  - ở dòng 17 increase1 <=> increase
    nên khi gọi increase1 chính là gọi increase
  
  - khi gọi increase1 vì nhớ đc phạm vi nó được tạo là bên trong dấu {} của makeCouter
    và truy cập được biến ở bên ngoài phạm vi nên truy cập vào biến couter và lấy giá trị

  - vì hàm increase được gán vào biến increase1 ở phạm vi toàn cục --> increase ở phạn vi toàn cục
    mà hàm increase có sử dụng biến couter nên biến couter không bị xóa khi makeCouter chạy xong

# 2. Ứng dụng
  - viết code gắn gọn hơn
  - biểu diễn, ứng dụng tính Private trong OOP

  VD1: viết code ngắn gọn hơn

  function createLogger(namespace){
      return function(message){
          console.log(`[${namespace}] ${message}`)
      }
  }

  let loggerError = createLogger('Lỗi')
  console.log(loggerError('sai cú pháp'))
  console.log(loggerError('sai mật khẩu'))

  VD2: biểu diễn, ứng dụng tính Private trong OOP
  function appCars(){
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
  }

  const app = appCars()
  app.add('BMV')
  app.get(0)
  