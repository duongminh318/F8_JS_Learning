# 1. Các các tạo số
  >> Cách 1: var age = 18
  >> Cách 2: var age = new Number(18)

  - nên đùng cách số 1
  - không nên dùng cách số 2 vì: 
    + dài dòng hơn
    + kiểu dữ liệu sẽ là object không phải number
    + phải khởi tạo một đối tượng nên sẽ chậm hơn

# 2. Kiểu dữ liệu NaN
  + NaN: not a number
  + isNaN(): kiểm tra có phải NaN hay không 

  VD: console.log(13 / 'ABC') --> NaN

# 3. Làm việc với số
  - keyword: js number methods
  - Một số thuộc tính và phương thức hay dùng

  >> toString()
  + dùng để chuyển từ kiểu số thành kiểu string

  VD: age.toString() --> '18'

  >> toFixed()
  + dùng để làm tròn số
  + tham số 1: muốn làm tròn bao nhiêu số sau dấu phẩy (mặc định = 0)

  VD_1: 13.3.toFixed() --> 13
  VD_2: 13.36.toFixed(1) --> 13.4
  VD_3: 13.35.toFixed(1) --> 13.3
  VD_4: 13.34.toFixed(1) --> 13.3
