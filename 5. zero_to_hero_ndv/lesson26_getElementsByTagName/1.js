/*let a=" xin chào các thím";
console.log(a);
console.log("hello");*/

// FUNCTION
	/*function TinhTong(x1, x2) {
		// body...
		return x1+x2;
	}
	console.log(TinhTong(2,3));
	console.log("msg");

	function chao() {
		// body...
		console.log("hello các thím");
	}
	chao();*/

// Dom
let cacTieuDe= document.getElementsByTagName('h4');
for (var i = 0; i < cacTieuDe.length; i++) {
	cacTieuDe[i].innerHTML = '<button type="button" class="btn btn-primary">Minh Đẹp Trai</button>';

}