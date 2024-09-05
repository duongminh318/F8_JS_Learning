/*document.addEventListener("DOMContentLoaded",function() {
  // Todo...

});*/

document.addEventListener("DOMContentLoaded",() => {
  // Todo...
  var nut = document.getElementsByClassName('nuttongquat'); // class trả về 1 mảng, id trả về 1 cái
for (var i = 0; i < nut.length; i++) {
	nut[i].onclick=function () {
  	// body...
  	 // lấy data từ html
  	console.log(this.getAttribute('data-matkhau'));
  }
}

  
});