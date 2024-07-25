function nhapMang(arr, n){  
    for(var i=1; i<=n; i++){
        var el= prompt("nhập phần tử thứ"+i);
        arr.push(el);
    }
}

function inMang(arr){
    console.log("Giá trí của các phần tử trong mảng là: ")
    for (var i = 0; i < arr.length; i++) 
    {
    //    consol1e.log(arr[i]);
       console.log(arr[i]);
    }
}

function Max(arr){
  var max= arr[0];
  
  for (var i = 1; i < arr.length; i++) 
  {
    if(arr[i]>max){
    max=arr[i];
    }
  }
  return max;
}

function Min(arr){
  var min= arr[0];
  for (var i = 1; i < arr.length; i++) 
  {
    if(arr[i]<min){
    min=arr[i];
    }
  }
  return min;
}

var mangTam=[];
do {
    var choice = prompt("Mời bạn chọn chức năng:\n1. Nhập mảng\n2. Xuất mảng\n3. Tìm số lớn nhất trong mảng\n4. Tìm số nhỏ nhất trong mảng\n5. Tính tổng các số trong mảng\n6. Thoát khỏi chương trình");
  
    switch (choice) {     
        case "1":
          // Gọi hàm để nhập mảng
          console.log("Bạn đã chọn chức năng Nhập mảng");
          var n= prompt("mời thím nhập số lượng phần tử mảng");   
          nhapMang(mangTam, n);
          break;
        case "2":
          // Gọi hàm để xuất mảng
          // code của hàm xuất mảng ở đây
          console.log("Bạn đã chọn chức năng Xuất mảng");
          inMang(mangTam);
          break;
        case "3":
          // Gọi hàm tìm số lớn nhất trong mảng
          // code của hàm tìm số lớn nhất ở đây
          console.log("Bạn đã chọn chức năng Tìm số lớn nhất trong mảng");
          console.log("Giá trị Max của mảng là: ", Max(mangTam))
          
          break;
        case "4":
          // Gọi hàm tìm số nhỏ nhất trong mảng
          // code của hàm tìm số nhỏ nhất ở đây
          console.log("Bạn đã chọn chức năng Tìm số nhỏ nhất trong mảng");
          console.log("Bạn đã chọn chức năng Tìm số lớn nhất trong mảng");
          console.log("Giá trị Min1 của mảng là: ", Min(mangTam))
         
          break;
        case "5":
          // Gọi hàm tính tổng các số trong mảng
          // code của hàm tính tổng ở đây
          console.log("Bạn đã chọn chức năng Tính tổng các số trong mảng");
          break;
        case "6":
          // Thoát khỏi chương trình
          console.log("Bạn đã chọn chức năng Thoát khỏi chương trình");
          alert("bye bye");
          break;
        default:
          alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
          break;
      }

}while(choice!=="6")
