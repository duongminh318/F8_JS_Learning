
var myArray=[
    'Javascrip',
    'PHP',
    'C#',
    'ASP.NET'
]

// for
// duyệt mảng 
/*
    var arrayLenght=myArray.length;
    for(var i=0;i<arrayLenght;i++){
        console.log(myArray[i]);
    }
*/

// lesson 96
//  viết chương trình để tính tổng giá trị của 1 đơn hàng.
// Cho trước mảng orders là danh sách chứa các khóa học, 
// các mặt hàng này được thể hiện dưới dạng object và đều có 1 
// key là price để thể hiện giá trị của mặt hàng đó.
// Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.

//mảng chứa các object
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal( orders){
    var total=0;
    for(var i=0;i<orders.length;i++){
        total+=orders[i].price;
    }
    return total;
}

// Expected results:
getTotal(orders) // Output: 8700000


//for in
// var myObjec={
//     myName:"Duong Minh",
//     myAge:23,
//     Email:"duongminh318@gmail.com",
//     myPhone:"331",
// };

// for( var key in myObjec){
//     console.log(key);
// }

function run(object) {
    var mangtam=[]
    for(var key in object){// duyệt qua từng key của object
        // chuyền từng thành phần của object vào mảng key..      value
        mangtam.push("Thuộc tính " + key + " có giá trị " + object[key])
    }
    return mangtam;
}

// Expected results:
var objectChuyenVao={ name: 'Nguyen Van A', age: 16 }
// console.log(run(objectChuyenVao));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// đệ quy

function giaiThua(num){
        if(num<=0){ // điều kiện dừng
            return 1;
        }else{
            return num*giaiThua(num-1)
        }

}

console.log(giaiThua(6))
  

