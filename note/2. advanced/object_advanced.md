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

- Một instance là một đối tượng cụ thể được tạo từ một hàm tạo. Instance kế thừa tất cả các thuộc tính và phương thức từ hàm tạo mà nó được tạo ra, nhưng giá trị của các thuộc tính có thể khác nhau giữa các instance.

>> Example: 

    function Car(make, model) {
        this.make = make;
        this.model = model;
        }

        const myCar = new Car("Toyota", "Corolla");
        console.log(myCar);      -->Car {make: "Toyota", model: "Corolla"}





