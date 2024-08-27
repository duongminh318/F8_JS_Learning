# Function constructor
- tạo ra 1 bảng thiết kế dùng chung cho đối tượng có các thuộc tính giống nhau
>>
        function ĐốiTượng(tênThamSố1, tênThamSố2) {
            this.tênThuộcTính1 = tênThamSố1;
            this.tênThuộcTính2 = tênThamSố2;
            this.phươngThức = function() {
            // code thực hiện một số hành động
        };
}

>> Example: 

        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        const person = new Person("John", 30);
        console.log(person); --> Person {name: "John", age: 30}

- Một instance (biến thể) là một đối tượng cụ thể được tạo từ một hàm tạo. Instance kế thừa tất cả các thuộc tính và phương thức từ hàm tạo mà nó được tạo ra, nhưng giá trị của các thuộc tính có thể khác nhau giữa các instance.

>> Example: 

    function Car(make, model) {
        this.make = make;
        this.model = model;
        }

        const myCar = new Car("Toyota", "Corolla");
        console.log(myCar);      -->Car {make: "Toyota", model: "Corolla"}

# Build in Javascript Constructors
- Các hàm tạo dựng sẵn trong JavaScript là những hàm được cung cấp sẵn bởi ngôn ngữ lập trình để tạo ra các kiểu dữ liệu cơ bản hoặc phức tạp một cách nhanh chóng và tiện lợi. Các hàm tạo này bao gồm: String, Number, Array, Object, Function, v.v.

>> Example

        let str = new String("Hello");
        let num = new Number(123);
        let arr = new Array(1, 2, 3);
        let obj = new Object();
        let func = new Function("x", "y", "return x + y");

- trả về đối tượng khi sử dụng từ khóa new
>> Example

        let strObj = new String("hello");
        console.log(typeof strObj); // object

        //new Object() hoặc cú pháp literal {} đều tạo ra một đối tượng mới.
            let obj = new Object();
            console.log(typeof obj); // object

        //new Function() tạo một đối tượng Function mới, cho phép bạn định nghĩa hàm động.
            let funcObj = new Function("a", "b", "return a + b");
            console.log(typeof funcObj); // function
# Prototypes
- công dụng của Prototypes trong JavaScript:
Chia sẻ phương thức và thuộc tính:

- Các đối tượng có thể chia sẻ các phương thức và thuộc tính thông qua prototype của chúng, giúp tiết kiệm bộ nhớ vì không cần phải sao chép phương thức cho mỗi đối tượng.
- Khi một đối tượng cần truy cập một thuộc tính hoặc phương thức, JavaScript sẽ tìm kiếm thuộc tính hoặc phương thức đó trong đối tượng. Nếu không tìm thấy, JavaScript sẽ tìm kiếm trong prototype của đối tượng đó, và tiếp tục tìm kiếm trong chuỗi prototype cho đến khi tìm thấy hoặc đạt đến null.
- Tạo sự kế thừa:

- Prototypes cho phép các đối tượng kế thừa thuộc tính và phương thức từ các đối tượng khác, tạo ra một hình thức kế thừa động và linh hoạt mà không cần sử dụng lớp (class) như trong các ngôn ngữ OOP truyền thống.
Điều này cho phép các đối tượng được tạo ra từ một hàm tạo (constructor function) kế thừa các phương thức từ prototype của hàm tạo đó.
Giúp tổ chức mã dễ dàng và hiệu quả:

- Thay vì định nghĩa phương thức bên trong mỗi đối tượng (gây lãng phí bộ nhớ), bạn có thể định nghĩa chúng một lần trong prototype và tất cả các đối tượng kế thừa từ prototype đó đều có thể sử dụng phương thức này.
Điều này cũng giúp việc sửa đổi hoặc cập nhật phương thức dễ dàng hơn, vì chỉ cần thay đổi trong prototype là tất cả các đối tượng kế thừa đều nhận được cập nhật.
Khả năng mở rộng đối tượng:

- Bạn có thể mở rộng chức năng của các đối tượng hiện có bằng cách thêm các phương thức hoặc thuộc tính mới vào prototype của chúng, và tất cả các đối tượng được tạo từ hàm tạo đó sẽ có quyền truy cập vào các phương thức hoặc thuộc tính mới này.
>> Example:

            function Person(name) {
                this.name = name;
            }

            Person.prototype.greet = function() {
                console.log("Hello, my name is " + this.name);
            };

            let alice = new Person("Alice");
            let bob = new Person("Bob");

            alice.greet(); // Output: "Hello, my name is Alice"
            bob.greet();   // Output: "Hello, my name is Bob"
- greet là một phương thức được định nghĩa trong Person.prototype. Cả alice và bob đều có thể sử dụng phương thức greet thông qua prototype mà không cần sao chép phương thức này vào mỗi đối tượng.


# Autoboxing
-  các giá trị nguyên thủy (primitive values) như number, string, và boolean được tự động chuyển đổi thành đối tượng tương ứng khi cần thiết.
- giúp giá trị nguyên thủy sử dụng các phương thức và thuộc tính của đối tượng tương ứng

>> Example

        let str = "hello";
        console.log(str.toUpperCase()); // "HELLO"
- cùng với prototype hỗ trở js hướng đối tượng tốt hơn
- Autoboxing và prototype trong JavaScript thực sự hỗ trợ khả năng hướng đối tượng của ngôn ngữ này một cách hiệu quả. Autoboxing cung cấp một cách tiện lợi để làm việc với các giá trị nguyên thủy như thể chúng là đối tượng, trong khi hệ thống prototype cho phép kế thừa và mở rộng các chức năng của đối tượng, mang lại tính linh hoạt và mạnh mẽ trong phát triển ứng dụng.