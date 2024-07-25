// nhập liệu

let input = prompt("mời vào chuỗi e", 0);

// dấu hiệu để nhận biết một từ là khi xuất hiện một dấu cách, thì ký tự tiếp theo sẽ không phải là dấu cách, trừ từ đầu tiên của câu
// vì mình không muốn kiểm tra riêng cho trường hợp từ đầu tiên trong câu
// nên mình lúc nào cũng thêm một dấu cách vào đầu câu

input = '' + input;

let soTu = 1;
for (let i = 0; i < input.length; i++) {
  if (input[i] == ' ' && input[i + 1] != ' ') {
    soT

  }
}
console.log(soTu);