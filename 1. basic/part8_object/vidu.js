//Object trong javascript

// var myInfo= {
//     name: 'Bruce Duong',
//     age: 18,
//     address: 'Can Tho, VN'
// };

// myInfo.email='duongminh318@gmail.com';
// console.log(myInfo.name)

// Object constructor

function User(firstName, lastName, avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;

    this.getName= function(){
        return`${this.firstName} ${this.lastName}`;
    }

}

var author= new User("Son Dang", "D", "avatar");
var user= new User("Vu Nguyen", "Coder", "avatar2");

author.title="chia se dao tai f8";
user.comment= " lieu co khoá asp ko";

console.log(author)
console.log(user)

console.log(author.getName())
