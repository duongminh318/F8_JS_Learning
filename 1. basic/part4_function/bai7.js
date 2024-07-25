// kiem tra nguyen to
function ktSoNguyenTo(n){
    for(var i=2; i<n; i++){
        if( n%i==0){  // neu co 1 so chia het thi khong phai so nguyen to
            return false;
        }
    }
    return true;

}

//ham in ra cac so ng to do
function inListNguyenTo()
{
    for(var i=0 ; i< arguments.length; i++){
        if(ktSoNguyenTo(arguments[i])==true)
        {
            console.log(arguments[i]);
        }
    }
}

inListNguyenTo(1,3,5,7, 11, 12);