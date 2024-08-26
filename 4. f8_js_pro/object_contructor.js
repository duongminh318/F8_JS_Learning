/**
 * Object Contructor
 */
// bản thiết kế object
function Character(name, hp, atk, defense) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.attack = function (target) {
        // Giảm sức khỏe của mục tiêu dựa trên sức tấn công của Tom
        let damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        console.log(`${this.name} "phang" ${target.name}, gây ${damage} sát thương, ${target.name} còn ${target.hp} máu`);
    };
    this.isAlive = function () {
        return this.hp > 0;
    };

}


// tạo đối tượng mới từ bản thiết kế
let tom = new Character("Tom", 1000, 50, 5);
let jerry = new Character("jerry", 500, 20, 20);

// Bắt đầu vòng lặp chiến đấu
let round = 1;  // Khởi tạo biến đếm số vòng đấu
while (jerry.isAlive() && tom.isAlive()) {  // Vòng lặp tiếp tục khi cả Jerry và Tom đều còn sống
    console.log("Round " + round);  // In ra số vòng đấu hiện tại
    if (round % 2 === 0) {  // Nếu vòng đấu là số chẵn
        tom.attack(jerry);  // Tom tấn công Jerry
    } else {  // Nếu vòng đấu là số lẻ
        jerry.attack(tom);  // Jerry tấn công Tom
    }
    round++;  // Tăng biến đếm vòng đấu lên 1
}

// Kiểm tra ai là người thắng sau khi vòng lặp kết thúc
if (tom.hp > 0) {  // Nếu Tom còn sống
    console.log("Tom win");  // Tom là người thắng
} else {  // Nếu Tom không còn sống (Jerry còn sống)
    console.log("Jerry win");  // Jerry là người thắng
}
