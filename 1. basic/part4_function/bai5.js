// so nguyen to la so chia het cho 1 va chinh no
function ktSoNguyenTo(n){
    for(var i=2; i<n; i++){
        if( n%i==0){  // neu co 1 so chia het thi khong phai so nguyen to
            return false;
        }
    }
    return true;

}
var n= prompt("nhap so can kiem  tra");
var result= ktSoNguyenTo(n);
if( result)
{
    console.log(n+"   la so nguyen to");
}else{
    console.log(n+" khong phai la so nguyen to");
}
