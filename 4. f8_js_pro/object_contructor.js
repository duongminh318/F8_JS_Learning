/**
 * 1. tạo ra đối tượng tom, jerry
 *  - hp/health: máu
 *  - Attack power/ATK: tấn công
 *  - defense: phòng thủ
 *  - speed: tốc độ
 *  - Counter attack: độ phản công
 */
/**
 * Object Contructor
 */
// bản thiết kế object
function Character(name, hp, atk, defense, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed= speed;
    this.counterRate= counterRate;
    this.attack = function(target) {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        console.log(`${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`);
    };
    this.isAlive = function() {
        return this.hp > 0;
    };
}


// Bắt đầu vòng lặp chiến đấu
function battle(char1, char2) {
    let round = 1;

    while (char1.isAlive() && char2.isAlive()) {
        console.log(`Round ${round}:`);

        if (char1.speed > char2.speed) {
            char1.attack(char2);
            if (char2.isAlive()) char2.attack(char1);
        } else {
            char2.attack(char1);
            if (char1.isAlive()) char1.attack(char2);
        }

        round++;
    }
    // kiểm tra xem ai là người chiến thắng
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} wins!`);
    return winner;
}

// Tạo 2 nhân vật để tham gia trận chiến
const tom = new Character("Tom", 1000, 50, 5, 30, 0.5); // tốc độ 30
const jerry = new Character("Jerry", 500, 20, 20, 10, 0.2); // tốc độ 10

// Bắt đầu trận đấu
battle(tom, jerry);