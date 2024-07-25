// function input vào mảng
function nhapMang(arr, n){
    for (var i = 0; i <n; i++) {
        var el = prompt('Nhập phần tử thứ ' + (i+1));
        arr[i]= el;
    }
}

// function output ra console.log

function inMang(arr){
    console.log("CÁC PHẦN TỬ TRONG MẢNG LÀ: ");
    for(var i=0; i<arr.length; i++){     
        console.log(arr[i]);       

    }

}


var arNum=[];
n = prompt(' mời thím nhập số lượng phần tử');
nhapMang(arNum, n);
inMang(arNum);
