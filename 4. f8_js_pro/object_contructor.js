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

          // xử lý target phản công
          if(target.isAlive() && Math.random()<target.counterRate){
            let counterDamage= Math.max(target.atk - this.defense, 0);// damamge phản công
            this.hp-=counterDamage;
            console.log(`${target.name} "phang lại" ${this.name}, gây ra ${counterDamage} sát thương. ${this.name} còn lại ${this.hp} máu.`);
        }
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
            battleRound(char1, char2);
        } else if (char2.speed > char1.speed) {
            battleRound(char2, char1);
        }else{ // khi speed bằng nhau xác suất để dc đánh trước là 50/5
            if(Math.random()<0.5){
                battleRound(char1, char2);
            }else{
                battleRound(char2, char1);
            }
        }
    
        round++;
    }
    
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} wins!`);
    return winner;
}

// xử lý luột đánh
function battleRound(attacker, defender) {
    attacker.attack(defender);
    if (defender.isAlive() && attacker.isAlive()) defender.attack(attacker);
}

// Tạo 2 nhân vật để tham gia trận chiến
const tom = new Character("Tom", 1000, 50, 5, 30, 0.5); // tốc độ 30
const jerry = new Character("Jerry", 500, 20, 20, 10, 0.2); // tốc độ 10

// Bắt đầu trận đấu
battle(tom, jerry);