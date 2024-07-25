# 1. JSON
  - là một định dạng dữ liệu (chuỗi)
  - biểu hiện được kiểu dữ liệu: String, Number, Boolean, Null, Array, Object
  - JSON.stringify(<biến>): chuyển từ kiểu dữ liệu JavaScript --> JSON
  - JSON.parse(<biến>): chuyển từ kiểu dữ liệu JSON --> JavaScript

  VD: chuyển từ JSON --> JavaScript
     var json1 = '"Tran Trong Nam"'
     var json2 = '[1, 2, 3]'
     var json3 = '{"name": "Trong Nam", "age": 18}'
     console.log(JSON.parse(json1)) --> Tran Trong Nam
     console.log(JSON.parse(json2)) --> [1, 2, 3]
     console.log(JSON.parse(json3)) --> {name: 'Trong Nam', age: 18}

  VD: chuyển từ JavaScript --> JSON
     var json1 = 'Tran Trong Nam'
     var json2 = [1, 2, 3]
     var json3 = {name: Trong Nam, age: 18}
     console.log(JSON.stringify(json1)) --> "Tran Trong Nam"
     console.log(JSON.parse(json2)) --> [1, 2, 3]
     console.log(JSON.parse(json3)) --> {name: 'Trong Nam', age: 18}
     console.log(typeof JSON.stringify(json1), typeof JSON.stringify(json2), typeof JSON.stringify(json3)) --> string string string

# 2. Sync - đồng bộ
  - code nào viết trước chạy trước, viết sau chạy sau
  - nếu code phía trước tốn nhiều hơn gian hơn code phía sau
    thì code phía sau vẫn chờ code phía trước chạy xong rồi mới chạy
  VD: console.log(1)
      console.log(2)

      -> 1
      -> 2

# 3. Async - bất đồng bộ
  - code nào chạy tốn ít thời gian hơn về trước, chạy tốn nhiều nhiều thời gian hơn về sau
  VD: setTimeout(function(){
         console.log(1)
      },1000)
      console.log(2)

      -> 2
      -> 1

  >> Một số Asyc trong javaScript
  - setTimeout
  - setInterval
  - fetch
  - XMLHttpRequest 
  - file reading
  - request animation frame

  VD: setTimeout( function() { 
      console.log('Dòng này sẽ in ra sau') 
      }, 0 )  // setTimeout là tác vụ bất động bộ (async)

      console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

# 4. Promise
  >> pain (nỗi đau)
  - làm xong việc 1 có kết quả, lấy kết quả đó làm việc 2
    làm xong việc 2 có kết quả, lấy kết quả đó làm việc 3
    làm xong việc 3 có kết quả, lấy kết quả đó làm việc 4
    sẽ sinh ra callback hell

  VD :Callback hell
   setTimeout(function(){
      console.log('việc 1')
      setTimeout(function () {
            console.log('việc 2')
            setTimeout(function () {
               console.log('việc 3')
               setTimeout(function () {
                  console.log('việc 4')
               }, 1000)
            }, 1000) 
      }, 1000)
   },1000)

   >> Promise
   - dùng callback để xử lý bất đồng bộ sẽ sinh ra callback hell 
    làm cho code nhìn không rõ ràng khó hiểu
   - vì vậy Promise để giải quyết bất đồng bộ dễ dàng hơn
   - có 3 trạng thái
     + pendding: đang chờ, thành công hay thất bại
     + fulfilled: thành công
     + rejected: thất bại

   >> Cách tạo ra Promise
   - dùng từ khóa new Promise 
   - trong constructor function sẽ truyền vào Excutor function
   - trong Excutor function sẽ nhận được 2 tham số dạng hàm resolve, reject
   - resolve() gọi khi thành công
   - reject() gọi khi thất bại

   VD: var promise = new Promise(
         function(resolve, reject){
            // thành công: resolve()
            // thất bại: reject()
         }
       )

   >> cách sử dụng Promise
   - phương thức then() và catch()
   - khi resolve() sẽ lọt vào then()
   - khi reject() sẽ lọt vào catch()

   VD: promise
         .then(function(){
            --code--
         })
         .catch(function(){
            --code--
         })

   >> Promise (chain)
   - tính chất nối chuỗi giúp giải quyết vấn đề hell
       var promise = new Promise(
         function(resolve, reject){
            resolve()
         }
       )

       promise
         .then(function(){
            --code--
         })
         .then(function(){
            --code--
         })
         .then(function(){
            --code--
         })
         .catch(function(){
            --code--
         })

   VD1: var promise = new Promise(
                function (resolve, reject) {
                    resolve(1)
                }
            )
            promise
               .then(function (num) {
                  console.log(num)
                  return ++num
               })
               .then(function (num) {
                  console.log(num)
                  return ++num
               })
               .then(function (num) {
                  console.log(num)
               })
   
   VD2: var promise = new Promise(
                function (resolve, reject) {
                    resolve(1)
                }
            )
            promise
               .then(function (num) {
                    return new Promise(function(resolve, reject){
                        setTimeout(function(){
                            resolve(num)
                        }, 3000)
                    })
                })
               .then(function (num) {
                  console.log(num)
               })

   VD3: function sleep(ms){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, ms)
            })
        }
        sleep(1000)
            .then(function(){
                console.log('việc 1')
                return sleep(1000)
            })
            .then(function () {
                console.log('việc 2')
                return sleep(1000)
            })
            .then(function () {
                console.log('việc 3')
            })

   >> Promise (chain) bắt lỗi
   VD3: function sleep(ms){
            return new Promise(function(resolve, reject){
                setTimeout(resolve, ms)
            })
        }
        sleep(1000)
            .then(function(){
                console.log('việc 1')
                return sleep(1000)
            })
            .then(function () {
               console.log('việc 2')
               return new Promise(function(resolve, reject){
                  reject('có lỗi')
               })
            })
            .then(function () {
               console.log('việc 3')
            })
            .catch(function(err){
               console.log(err)
            })
        
        -> việc 1
        -> việc 2
        -> có lỗi
   
   >> Promise methods (resolve, reject, all)
   - Promise.resolve(): luôn thành công
   - Promise.reject(): luôn thất bại

   VD1: var promise = Promise.resolve('Thành công')
        promise
         .then(function(result){
               console.log('result: '+ result)
         })

   VD2: var promise = Promise.reject('Thất bại')
        promise
         .catch(function(result){
               console.log('result: '+ result)
         })
   
   - Promise.all(): chạy song song các Promise, và kết hợp các kết quả lại với nhau
   VD: 
      var promise1 = new Promise(
            function(resolve){
                setTimeout(function(){
                resolve('promise1') 
                }, 2000)
            }
        )

      var promise2 = new Promise(
         function (resolve) {
               setTimeout(function () {
                  resolve('promise2')
               }, 5000)
         }
      )

      Promise.all([promise1, promise2])
         .then(function(result){
               console.log(result)
         })
      
      --> ['promise1', 'promise2']

# 5. fetch
  >> API
  - hiểu đơn giản là cổng giao tiếp giữa các phần mền
  - là một url
  VD: https://jsonplaceholder.typicode.com/comments

  >> 4 hành vi với API
  - lấy
  - thêm
  - sửa
  - xóa

  >> fetch()
  - phương thức dùng để lấy dữ liệu, là một Promise
  - truyền vào API (url)
  fetch('https://jsonplaceholder.typicode.com/comments') 
        .then(response => response.json())     // .json() trả về Promise, trong Promise đó đã resolve JSON.parse
        .then(json => console.log(json))       // nhận được dữ liệu kiểu JavaScript

   