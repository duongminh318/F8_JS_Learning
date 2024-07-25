function ktSoHoanHao(n){
    var tong=0;

    for(var i=1; i< n; i++){
        if(n%i==0)      // i la uoc cua n
        {
            tong+=i;
        }
    }

    // xet dieu kien
    if( tong==n){
        console.log(n+" la so hoan hao");
    }else
    {
        console.log(n+" khong phai la so hoan hao");
    }

}

//nhap lieu
var n= prompt("moi thim nhap so muon kiem tra");
ktSoHoanHao(n);