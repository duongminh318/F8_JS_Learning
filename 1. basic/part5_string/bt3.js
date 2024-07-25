
// nhap vao mot chuoi va cat no thanh mang cac ky tu
var input =prompt("moi thim nhap vao moi chuoi",'123123').split('');

// duyet mang kt xem co phai toan so hay khong

function checkMang(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i] != Number(arr[i])){   
            console.log('FALSE')       
            return ;
        } 
          
    }   
    console.log('true')   
}

checkMang(input);





