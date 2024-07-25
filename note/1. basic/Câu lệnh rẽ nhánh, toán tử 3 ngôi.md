# 1. if, else if, else
  >> cú pháp
  if(<dieu_kien>){
        --code--
  }else if(<dieu_kien>){
        --code--
  }else{
        --code--
  }

  >> if, else if
  - nếu một nhánh thỏa mãn điều kiện thì sẽ bỏ qua các nhánh còn lại                                                                      

  >> else
  - nếu tất cả các nhánh đều không thỏa mãn thì sẽ vào else

# 2. switch
  >> cú pháp
  switch(<bieu_thuc>){
        case <dieu_kien_bang>:
            --code--
            break
        case <dieu_kien_bang>:
            --code--
            break
        default:
            --code--
        
  }

  - khi điều kiện đúng sẽ thực hiện các dòng code bên trong và khi gặp từ khóa break thì sẽ thoát khỏi biểu thức switch
    nếu không gặp từ khóa break thì sẽ thực hiện các câu lệnh phía sau mà không cần xét điều kiện

  - nếu tất cả các case đều không lọt vào thì sẽ lọt vào default

# 3. Khi nào sử dụng switch khi nào sử dụng if else
  >> khi sử dụng if else
  - khi dùng toán tử >, >=, <, <=, !=
  - khi dùng toán tử == mà có <= 3 trường hợp

  >> khi sử dụng switch
  - khi sử dụng toán tử == mà có > 3 trường hợp

# 4. Toán tử 3 ngôi
  >> cú pháp
  <dieu_kien> ? --code-- : --code

  - nếu điều kiện đúng thì sẽ thực hiện đoạn code sau dấu ?
  - nếu điều kiện sai thì sẽ thực hiện đoạn code sau dấu :