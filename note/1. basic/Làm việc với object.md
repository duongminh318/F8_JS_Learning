# 1. Các cách tạo object
  - dùng dấu {} để tạo ra một object
  - trong {} có các cặp key và value
  - giữa các cặp key và value cách nhau bằng dấu phẩy
  - value có thể là tất cả các kiểu dữ liệu

  var myInfo = { 
      name: 'trong nam',
      age: 18,
      address: 'Tuyen Quang'
      getName: function(){
          return this.name  
      }
  }

# 2. Cách thêm, xóa và lấy value

  >> thêm cặp key và value mới vào trong object
  cú pháp: <tên_obj>.<key_mới> = <value_mới>
  hoặc:    <tên_obj>['<key_mới>'] = <value_mới>     

  VD: myInfo.email = 'trantrongnam138003@gmail.com'
  VD: myInfo.['email'] = 'trantrongnam138003@gmail.com'

  >> lấy value ra ngoài 
  cú pháp: <tên_obj>.<key>
  hoặc:    <tên_obj>['<key>']

  VD: myInfo.name --> 'trong nam'
  VD: myInfo.['name'] --> 'trong nam'

  - nếu lấy ra value không có trong obj sẽ trả về undefined

  VD: myInfo.height --> undefined

  >> tạo key bằng biến
  var ageKey = age
  var myInfo = { 
      name: 'trong nam',
      [ageKey]: 18,
      address: 'Tuyen Quang'
  }

  >> xóa cặp key và value
  - cú pháp: delete <tên_obj>.<key_cần_xóa>

  VD: delete myInfo.name 

# 3. Object constructor
  >> Giống như một công thức, một bản thiết kết chung
  >> Giống class bên java
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
  VD: author.address = 'Tuyen Quang'
  VD: user.height = 1m75

  >> thêm thuộc tính bên ngoài bản thiết kế (hàm tạo)
  - cú pháp: <tên_hàm_tạo>.prototype.<tên_thuộc_tính> = <giá_trị>
  - các thuộc tính thêm vào bằng prototype sẽ nằm ở __proto__

  VD: User.prototype.country = 'Viet Nam'
  VD: User.prototype.getCountry = function(){
        return this.country
      }

# 4. Đối tượng Date
  >> Tạo đối tượng date
  - dùng từ khóa: new Date()

    VD: var date = new Date()

  >> các thuộc tính
  - Lấy ra năm: getFullYear()
  - lấy ra tháng: getMonth() + 1
  - lấy ra ngày: getDate()
  - lấy ra giờ: getHours()
  - lấy ra phút: getMinutes()
  - lấy ra giây: getSeconds() 
  
# 5. Math object
  >> Math.PI
  - trả về số PI

  >> Math.round()
  - làm tròn số

  >> Math.abs()
  - trả về giá trị tuyệt đối

  >> Math.ceil()
  - làm tròn trên

  >> Math.floor()
  - làm tròn dưới

  >> Math.random()
  - trả về số thập phân ngẫu nhiên nhỏ hơn 1

  >> Math.min()
  - truyền vào 1 dãy số và trả về số nhỏ nhất

  >> Math.max()
  - truyền vào 1 dãy số và trả về số lớn nhất
  

