# 1. Toán tử số học
  - cộng:         +
  - trừ:          -
  - nhân:         *
  - chia:         /
  - lũy thừa:     **
  - chia lấy dư:  %
  - tăng lên một giá trị số:  ++
  - giảm một giá trị số:      --

# 2. Toán tử gán
  Toán tử         ví dụ           tương đương
  =               x = y           x = y
  +=              x += y          x = x + y
  -=              x -= y          x = x - y
  *=              x *= y          x = x * y
  /=              x /= y          x = x / y
  **=             x **= y         x = x ** y


# 3. Toán tử ++ và --
  . x++ tăng giá trị biến lên một đơn vị và trả về giá trị [TRƯỚC] khi tăng
  . ++x tăng giá trị biến lên một đơn vị và trả về giá trị [SAU] khi tăng
  . x-- giảm giá trị biến xuống một đơn vị và trả về giá trị [TRƯỚC] khi giảm
  . --x giảm giá trị biến xuống một đơn vị và trả về giá trị [SAU] khi giảm

# 4. Toán tử so sánh
  - bằng:				        ==
  - không bằng:			    !=
  - lớn hơn: 			      >
  - lớn hơn hoặc bằng: 	>=
  - nhỏ hơn:			      <
  - nhỏ hơn hoặc bằng:	<=

# 5. Kiểu dữ liệu boolean
  - có 2 giá trị đúng [true] và sai [false]

  >> Truthy và Falsy là gì?
    - Bất cứ giá trị nào khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị [true] thì ta gọi đó là [Truthy]
    - Bất cứ giá trị nào khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị [false] thì ta gọi đó là [Falsy]

  >> Có 6 giá trị sau được gọi là Falsy
    1. false
    2. 0 (số không)
    3. '' hoặc "" (chuỗi rỗng)
    4. null
    5. undefined
    6. NaN

  >> Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy,
    kể cả những giá trị sau:
    1. '0' (một chuỗi chứa số không)
    2. ' ' (một chuỗi chứa dấu cách)
    3. 'false' (một chuỗi chứa từ khóa false)
    4. [] (một array trống)
    5. {} (một object trống)
    6. function(){} (một hàm “trống”)

# 6. Toán tử logic
  - or:   || (chỉ cần một điều kiện đúng)
  - and:  && (tất cả điều kiện phải đúng)
  - not:  !  (phủ định)

# 7. Kiểu dữ liệu

  >> Kiểu dữ liệu nguyên thủy - Primitive Data
  - Number
    VD:  var age = 18

  - String
    VD:  var name = 'Duong Minh'

  - Boolean
    VD:  var isSuccess = true

  - Undefined (không có giá trị)
    VD: var address

  - Null (không có gì - nothing)
    VD: var isNull = null 
    
  - Symbol    

  >> Kiểu dữ liệu phức tạp - Complex Data
  - Function
  - Object

# 8. Toán tử so sánh === và !==

  |...........:.........:..................| 
  |  toán tử  :  !=     :   !==            |
  |           :  ==     :   ===            |
  |.....................:..................|
  |  so sánh  :  value  :   value && type  |
  |...........:.........:..................|

# 9. Toán tử so sánh logical và câu lệnh điều kiệu if
  >> Toán tử &&
  - kiểm tra từ trái qua phải nếu biểu thức là [Truthy] thì bỏ qua, kiểm tra biểu thức tiếp theo.
    + nếu [all] là [Truthy] thì trả về kết quả của biểu thức cuối cùng

    VD: result = 'A' && 'B' && 'C'
    --> result = 'C'

    + nếu gặp [Falsy] sẽ trả về kết quả của biểu thức đó và bỏ qua tất cả các biểu thức phía sau

    VD: result = 'A' && false && 'C'
    --> result = false

  >> Toán tử ||
  - kiểm tra từ trái qua phải nếu biểu thức là [Falsy] thì bỏ qua, kiểm tra biểu thức tiếp theo.
    + nếu [all] là [Falsy] thì trả về kết quả của biểu thức cuối cùng

    VD: result = '' || NaN || false
    --> result = false

    + nếu gặp [Truthy] sẽ trả về kết quả của biểu thức đó và bỏ qua tất cả các biểu thức phía sau

    VD: result = 'A' || 'B' || false 
    --> result = 'A'







