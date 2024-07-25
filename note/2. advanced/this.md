# This keyword
  >> từ khóa this trong javascript đề cập đến đối tượng mà nó thuộc về

# Đặc tính
  > trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
  > đứng ngoài phương thức, this tham chiếu tới đối tượng global

# Lưu ý
  > this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
  > this trong một hàm là undefined khi ở strict mode
  > các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác

# Fn.bind()
  > cho phép ràng buộc this cho một phương thức (function)
  > trả về một hàm mới với context được bind
  > hàm được trả về từ bind() vẫn có thể nhận các đối số từ hàm gốc

# Fn.call()
  > giúp gọi hàm và bind tới đối tượng khác
  > không trả ra hàm mới, luôn gọi hàm sau khi bind this 
  > dùng để mượn hàm
  > dùng để kế thừa

# Fn.apply
  > giống call
  > khác: đối số thứ 2 truyền vào là một mảng

# So sánh bind, call, apply
  >> Giống nhau
  - cú pháp truy cập
  - là các methods được kế thừa từ Function.prototype

  >> khác nhau
  function fn(){}

  > Bind method
  - trả ra hàm mới với `this` tham chiếu tới `thisArg`
  - không thực hiện gọi hàm
  - nếu được bind kèm `arg1, arg2, ...` thì các đối số này được ưu tiên hơn

  const newFn = fn.bind(thisArg, arg1 ,arg2, ....)
  newFn(arg1, arg2, ...)

  > Call method
  - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
  - nhận các đối số cho hàm gốc từ `arg1, arg2, ...`

  fn.call(thisArg, arg1, arg2, ...)

  > Apply method
  - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
  - Nhận các đối số cho hàm gốc bằng đối số thức 2 dưới dạng mảng `[arg1, arg2, ...]`

  fn.apply(thisArg, [arg1, arg2, ...])
