/**
 * 1. tạo ra đối tượng tom, jerry
 *  - hp/health: máu
 *  - Attack power/ATK: tấn công
 */
// Tạo đối tượng Tom với các thuộc tính và phương thức
const tom = {
    name: 'tom',    // Tên của nhân vật Tom
    hp: 1000,       // Sức khỏe của Tom (Health Points)
    atk: 50,        // Sức tấn công của Tom (Attack Power)

    // Phương thức tấn công mục tiêu
    attack(target) {
        // Giảm sức khỏe của mục tiêu dựa trên sức tấn công của Tom
        target.hp -= this.atk;
        console.log(`${this.name} "phang" ${target.name}, gây ${this.atk} sát thương, ${target.name} còn ${target.hp} máu`);
    },

    // Phương thức kiểm tra xem Tom còn sống hay không
    isAlive() {
        return this.hp > 0;
    },
}

// Tạo đối tượng Jerry với các thuộc tính và phương thức
const jerry = {
    name: 'jerry',  // Tên của nhân vật Jerry
    hp: 500,        // Sức khỏe của Jerry (Health Points)
    atk: 20,        // Sức tấn công của Jerry (Attack Power)

    // Phương thức tấn công mục tiêu
    attack(target) {
        // Giảm sức khỏe của mục tiêu dựa trên sức tấn công của Jerry
        target.hp -= this.atk;
        console.log(`${this.name} "phang" ${target.name}, gây ${this.atk} sát thương, ${target.name} còn ${target.hp} máu`);
    },

    // Phương thức kiểm tra xem Jerry còn sống hay không
    isAlive() {
        return this.hp > 0;
    },
}

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
