document.addEventListener("DOMContentLoaded",function() {
  // Todo...
	let tg=document.getElementsByClassName('tamgiac');
	let tamgiac= tg[0];
	
	var danhsach=document.getElementsByClassName('danhsach');
	var danhsach= danhsach[0];

	// sử dụng hàm onclick và toggle class cho tam giac đổi màu
	tamgiac.onclick=function(){
		 //console.log("thim vưa click");
		//this.style.color='white';  // dùng cách css

		//dùng cách đổi class
		this.classList.toggle('tamgiactrang');
		danhsach.classList.toggle('ra'); // thêm class ra vào

	}
},false);