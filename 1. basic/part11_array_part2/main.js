/**
 * các phương thức duyệt mảng
 *  forEach() duyệt qua từng phần tử mảng, trả về giá trị element và index
 *  every()
 *  some() => chỉ một element đúng trả về true
 *  find() => tìm một element thoả mãn điều kiện nào đó
 * - chỉ trả về giá trị đầu tiên nhìn thấy
 *  filter()
 *  map()
 *  reduce()
 */


var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 0
    },
    {
        id: 2,
        name: "PHP",
        coin: 0
    },
    {
        id: 3,
        name: "Ruby",
        coin: 1
    },
    {
        id: 4,
        name: "Java",
        coin:0
    },
    {
        id: 5,
        name: "Dark",
        coin: 0
    },
    {
        id: 6,
        name: "Ruby",
        coin: 10
    },
    {
        id: 7,
        name: "Ruby",
        coin: 12
    }
]

// courses.forEach(function(course, index){
//     console.log(index, course)
// });

// var isFree= courses.every(function(course, index){
//     return course.coin===0;
//  });

//  console.log(isFree)


// var isFree= courses.some(function(course, index){
//     return course.coin===0;
//  });

//  console.log(isFree)


//  var course= courses.find(function(course,index){
//     return course.name=='Ruby'
//  })

//  console.log(course)

// var listCourses= courses.filter(function(course,index){
//     return course.name=='Ruby'
//  })

//  console.log(listCourses)

var newCourses= courses.map();


