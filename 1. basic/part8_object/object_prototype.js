/**
 * 1. prototype là gì?
 * 2. sử dụng khi nào?
 */
function User(firstName, lastName, avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;

    this.getName= function(){
        return`${this.firstName} ${this.lastName}`;
    }

}

User.prototype.className='f8';
var user= new User("Vu Nguyen", "Coder", "avatar2");
var user2= new User("van teo", "saler", "avatar3");


console.log(user.className)
console.log(user2.className)