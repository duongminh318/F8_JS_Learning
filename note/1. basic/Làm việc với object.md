# 1. Các cách tạo object
  - dùng dấu {} để tạo ra một object
  - trong {} có các cặp key và value
  - giữa các cặp key và value cách nhau bằng dấu phẩy
  - value có thể là tất cả các kiểu dữ liệu

  var myInfo = { 
      name: 'bruce duong',
      age: 18,
      address: 'Kyoto'
      getName: function(){
          return this.name  
      }
  }

# 2. Cách thêm, xóa và lấy value

  >> thêm cặp key và value mới vào trong object
  cú pháp: <tên_obj>.<key_mới> = <value_mới>
  hoặc:    <tên_obj>['<key_mới>'] = <value_mới>     

  VD: myInfo.email = 'duongminh318@gmail.com'
  VD: myInfo.['email'] = 'duongminh318@gmail.com'

  >> lấy value ra ngoài 
  cú pháp: <tên_obj>.<key>
  hoặc:    <tên_obj>['<key>']

  VD: myInfo.name --> 'duong minh'
  VD: myInfo.['name'] --> 'duong minh'

  - nếu lấy ra value không có trong obj sẽ trả về undefined

  VD: myInfo.height --> undefined

  >> tạo key bằng biến
  var ageKey = age
  var myInfo = { 
      name: 'adrew',
      [ageKey]: 25,
      address: 'Kyoto'
  }

  >> xóa cặp key và value
  - cú pháp: delete <tên_obj>.<key_cần_xóa>

  VD: delete myInfo.name 

# 3. Object constructor
  >> Giống như một công thức, một bản thiết kết chung
  >> Giống class bên c#, java
  VD: function User(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.getName = function(){
            return `${this.firstName} ${this.lastName}`
        }
      }

  >> tạo ra một đối tượng cụ thể từ bản thiết kế dùng từ khóa new
  VD: var author = new User('Nam', 'Tran', 18)
      var user = new User('Son', 'Dang', 20)

  >> thêm những thuộc tính riêng cho từng đối tượng
  VD: author.address = 'Ha noi'
  VD: user.height = 1m75
>> prototpye = hàm nguyên mẫu
  >> thêm thuộc tính bên ngoài bản thiết kế (hàm tạo) 
  - cú pháp: <tên_hàm_tạo>.prototype.<tên_thuộc_tính> = <giá_trị>
  - các thuộc tính thêm vào bằng prototype sẽ nằm ở __proto__

  VD: User.prototype.country = 'Viet Nam'
  VD: User.prototype.getCountry = function(){
        return this.country
      }

# 4. Đối tượng Date
>> lấy ra các giá trị về thời gian
  >> Tạo đối tượng date
  - dùng từ khóa: new Date()

    VD: var date = new Date()

  >> các thuộc tính
  - Lấy ra năm: getFullYear()
  - lấy ra tháng: getMonth() + 1 >>0 -11
  - lấy ra ngày: getDate()
  - lấy ra giờ: getHours()
  - lấy ra phút: getMinutes()
  - lấy ra giây: getSeconds() 

  - key word link document: javascript date object mozila
# 5. Math object
  >> Math.PI
  - trả về số PI

  >> Math.round()
  - làm tròn số, thành số nguyên

  >> Math.abs(-1) >> 1
  - trả về giá trị tuyệt đối

  >> Math.ceil()
  - làm tròn trên

  >> Math.floor()
  - làm tròn dưới

  >> Math.random()
  - trả về số thập phân ngẫu nhiên nhỏ hơn 1 --> 0 đến 1

  >> Math.min()
  - truyền vào 1 dãy số và trả về số nhỏ nhất

  >> Math.max()
  - truyền vào 1 dãy số và trả về số lớn nhất


# 6. so sánh 2 object
- Dùng toán tử === để so sánh tham chiếu
- So sánh hai biến object xem chúng có cùng tham chiếu đến một object không.
>> 
      let car1 = { make: 'Toyota', model: 'Corolla' };
      let car2 = { make: 'Toyota', model: 'Corolla' };
      let car3 = car1;

      // Khác tham chiếu
      console.log(car1 === car2); // false

      // Cùng tham chiếu
      console.log(car1 === car3); // true

# Các cách so sánh objects 
## Dùng toán tử === để so sánh tham chiếu
- Sử dụng JSON.stringify để so sánh nội dung
- Chuyển đổi objects thành chuỗi JSON và so sánh chuỗi đó.
>>
      let student1 = { id: 1, name: "Bob" };
      let student2 = { id: 1, name: "Bob" };

      console.log(JSON.stringify(student1) === JSON.stringify(student2));// --> true

-sử dụng Json. stringify --> gặp khó khăn khi hai object có các element khác thứ tự nhau

## Dùng thư viện bên ngoài như Lodash
- Sử dụng hàm _.isEqual() từ thư viện Lodash để so sánh sâu (deep compare) giữa các objects. (lodash.com)
- nhúng link lodash và html
>>
      <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
      <script>
        let obj1 = { part: { id: 10, name: 'Top' } };
        let obj2 = { part: { id: 10, name: 'Top' } };

        console.log(_.isEqual(obj1, obj2)); // true
      </script>


