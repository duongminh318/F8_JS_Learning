# 1. HTML DOM
  >> có 3 thành phần
    - Element: là các thẻ html
    - Attribute: là các thuộc tính của thẻ
    - Text: chữ hiện ra màn hình
  --> gọi chung là [node]

# 2. Document
  - là element lớn nhất đại điện cho cả web chứa tất cả các element khác
  - vì vậy muốn lấy các element khác đều phải đi qua document

# 3. Get element methods
  >> getElementById()
  - truyền vào id của phần tử muốn lấy ra
  - trả về 1 thẻ
  VD: document.getElementById('title') 

  >> getElementsByClassName()
  - truyền vào class của các phần tử muốn lấy ra
  - trả về HTMLCollection(giống mảng, không có các method như map(),...) chứa các phần tử có cùng class với class truyền vào 
  VD: document.getElementsByClassName('item')

  >> getElementsByTagName()
  - truyền vào tên thẻ của các phần tử muốn lấy ra
  - trả về HTMLCollection(giống mảng, không có các method như map(),...) chứa các phần tử có cùng tên thẻ với tên thẻ truyền vào 
  VD: document.getElementsByClassName('p') 

  >> querySelector()
  - truyền vào CSS selector
  - trả về 1 phần tử đầu tiên có cùng CSS selector với CSS selector truyền vào
  VD: document.querySelector('div .item')

  >> querySelectorAll()
  - truyền vào CSS selector
  - trả về NodeList(giống mảng, không có các method như map(),...) chứa các phần tử có cùng CSS selector với CSS selector truyền vào
  VD: document.querySelector('#div .item') 

  >> đứng từ thẻ cha để lấy các thẻ con
  <div>
    <h1></h1>
  </div>
  VD: var div = document.querySelector('div')
      var h1 = parent.querySelector('h1')
  >> đứng từ thẻ con lấy ra thẻ con
  <div>
    <h1></h1>
  </div>
  var h1 = document.querySelector('h1')
  var div = h1.parentElement

# 4. Attribute node & Text node
  >> Attribute node
  > thêm attribute hợp lệ vào thẻ
  - cú pháp: 
    <DOM_element>.<tên_attribute> = '<giá_trị_của_attribute>'
  - VD: <a>YouTube</a>
        document.querySelector('a').href = 'https://www.youtube.com/'
        document.querySelector('a').className = 'linkYouTube'
    
  > lấy ra giá trị của attribute hợp lệ của thẻ
  - cú pháp: 
    <DOM_element>.<tên_attribute>
  - VD: <a href="https://www.youtube.com/">youtube</a>
        console.log(document.querySelector('a').href) -->   https://www.youtube.com/

  > thêm attribute bất kỳ vào thẻ
  - cú pháp: 
    <DOM_element>.setAttribute('<tên_attribute>', '<giá_trị_của_attribute>')
  - VD: <h1>YouTube</h1>
        document.querySelector('h1').setAttribute('href' ,'https://www.youtube.com/')
        document.querySelector('h1').setAttribute('data-1' ,'youtube')

  > lấy ra giá trị của attribute bất kì của thẻ
  - cú pháp: 
    <DOM_element>.getAttribute('<tên_attribute>')
  - VD: <h1>YouTube</h1>
        document.querySelector('h1').setAttribute('data-1', 'youtube')
        console.log(document.querySelector('h1').getAttribute('data-1')) -->   youtube

  >> Text node
  > innerText và textContent
  - giống nhau
    + lấy ra chữ
        VD: <h1>YouTube</h1>
            console.log(document.querySelector('h1').innerText) --> YouTube
            console.log(document.querySelector('h1').textContent) --> YouTube

    + thay đổi chữ
        VD: <h1>YouTube</h1>
            document.querySelector('h1').innerText = 'Facebook' --> <h1>Facebook</h1>
            document.querySelector('h1').textContent = 'Facebook' --> <h1>Facebook</h1>
    
  - khác nhau
    VD: <div>|     <span>nam</span>        <span>YouTube</span>     |</div>
        console.log(document.querySelector('h1').innerText) --> | nam YouTube |
        console.log(document.querySelector('h1').textContent) --> |      nam      YouTube      |

  - innerText: lấy ra chữ hiện thị trên web
  - textContent: bỏ thẻ tag đầu cuối và lấy ra nội dung giông hệt code trong file html
  
# 5. innerHTML vs outerHTML
  >> innerHTML
  - thay đổi các element con và lấy ra các element con
  - cú pháp thay: <DOM_element>.innerHTML = `<HTML>`
  - cú pháp lấy: <DOM_element>.innerHTML
  VD: <div><span>nam</span></div>
      console.log(document.querySelector('div').innerHTML) --> <nam>YouTube</nam>
      document.querySelector('div').innerHTML = `<h1>YouTube</h1>` -->  <div><h1>YouTube</h1></div>
 
  >> outerHTML
  - thay đổi chính element gọi và xóa luôn ele con, lấy ra element gọi và các element con
  - cú pháp thay: <DOM_element>.innerHTML = `<HTML>`
  - cú pháp lấy: <DOM_element>.innerHTML
  VD: <div><span>nam</span></div>
      console.log(document.querySelector('div').outerHTML)) --> <div><nam>YouTube</nam></div>
      document.querySelector('div').outerHTML = `<p>nam</p>` -->  <p>nam</p>

# 6. DOM CSS
  >> cú pháp 
  <DOM_element>.style.<tên_thuộc_tính> = '<giá_trị_thuộc_tính>'
  VD: <div></div>
      document.querySelector("div").style.height = '100px'
      document.querySelector("div").style.width = '200px'
      document.querySelector("div").style.backgroundColor = 'red'

  >> cú pháp viết nhiều thuộc tính gắn gọn hơn
  Object.assign(<DOM_element>.style, {
      <tên_thuộc_tính>: '<giá_trị_thuộc_tính>',
      <tên_thuộc_tính>: '<giá_trị_thuộc_tính>',
      ...
  })

  vD: <div></div>
  Object.assign(document.querySelector("div").style, {
      height: '100px',
      width: '200px',
      backgroundColor: 'red'
  })

# 7. ClassList Property
  >> cú pháp 
  <DOM_element>.classList.<phương_thức>

  >> add
  - thêm class
  - các class truyền vào cách nhau bằng dấu phẩy
  <DOM_element>.classList.add('<tên_class>')

  >> contains
  - kiểm tra có class hay không
  <DOM_element>.classList.contains('<tên_class>')

  >> remove
  - xóa class
  <DOM_element>.classList.remove('<tên_class>')

  >> toggle
  - nếu có class --> xóa
  - nếu không có class --> thêm
  <DOM_element>.classList.toggle('<tên_class>')

# 8. DOM events
  >> Attribute events
  VD: <h1 onclick="console.log('abc')">YouTube</h1>

  - lấy ra chính element thực hiện event dùng từ khóa this
  VD: <h1 onclick="console.log(this)">YouTube</h1>

  >> Assign event using the element node
  VD: document.querySelector("h1").onclick = function(){
        console.log('abc')
      }

  - lấy ra chính element thực hiện event dùng e.target
  VD: document.querySelector("h1").onclick = function(e){
        console.log(e.target)
      }


# 9. PreventDefault and StopPropagation
  >> preventDefault()
  - loại bỏ hành vi mặc định
  VD: <a href="https://www.google.com/">tìm kiếm</a>
      document.querySelector("a").onclick = function(e){
          e.preventDefault()
      }
  
  >> stopPropagation()
  - loại bỏ hành vi nổi bọt
  VD: <div onclick="console.log('DIV')"> DIV <button>BUTTON</button> </div>
      document.querySelector('button').onclick = function(e){
        e.stopPropagation()
        console.log('Button')
      }

# 10. Event listener
  >> DOM events
  - xử lý nhiều việc trong 1 function
  - hủy bỏ lắng nghe --> gán lại
  - sử dụng khi envent làm 1 việc đơn giản, không có nhu cầu hủy bỏ 
  
  >> addEventListener()
  - tách ra nhiều function, nhìn sẽ tường minh dễ hiểu hơn
  - cú pháp thêm event --> <DOM_element>.addEventListener('<tên_envent>', <tên_function>)
  - hủy bỏ lắng nghe --> <DOM_element>.removeEventListener('<tên_envent>', <tên_function>)
  - sử dụng khi event làm nhiều việc, cần tách nhỏ, cần hủy bỏ 1 trong số việc đó
  VD: <button>Click me!</button>
      document.querySelector('button').addEventListener('click', function viec1(){
        --code viec 1--
      })

      document.querySelector('button').addEventListener('click', function viec2(){
        --code viec 2--
      })

      document.querySelector('button').removeEventListener('click', viec2)