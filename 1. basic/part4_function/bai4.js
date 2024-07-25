// tinh tong
function tongMang(){
    var tong=0;
    for(var i=0; i<arguments.length;i++){
        tong+=arguments[i];     
    }
    return tong;
}

//in dãy số đã nhập
function inMang(){
  
    for(var i=0; i<arguments.length;i++){
        console.log(arguments[i]);
    }
   
}

//Tìm số lớn nhất
function Max(){
    var max=arguments[0];
    for(var i=0; i<arguments.length;i++){
       if(max< arguments[i]) 
       max=arguments[i];
    }
    return max;
}

//Tìm số nhỏ nhất
function Min(){
    var min=arguments[0];
    for(var i=0; i<arguments.length;i++){
       if(min> arguments[i]) 
       min=arguments[i];
    }
    return min;
}


// goi ham

inMang(1, 2, 4);

// tongMang(1, 3, 4);
console.log("tong mang la: "+tongMang(1, 2, 4));
console.log("Max: : "+Max(1, 2, 4));
console.log("Min: : "+Min(1, 2, 4));



