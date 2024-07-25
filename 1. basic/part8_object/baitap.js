// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.getFullName = function() {
      return this.firstName + " " + this.lastName;
    };
  }
  
  
  
  
  // Ví dụ khi sử dụng
  var student = new Student('Long', 'Bui');
  
  console.log(student.firstName);  // 'Long'
  console.log(student.lastName);  // 'Bui'
  console.log(student.getFullName());  // 'Long Bui'