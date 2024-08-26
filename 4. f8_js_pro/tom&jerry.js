/**
 * 1. tạo ra đối tượng tom, jerry
 *  - hp/health: máu
 *  - Attack power/ATK: tấn công
 */
const tom = {
    name: 'tom',
    hp: 1000,
    atk: 50,

    attack(target) {
        target.hp -= this.atk;
        console.log(`${this.name} "phang" ${target.name}, gây ${this.atk} sát thương
        , ${target.name} còn ${target.hp} máu`);
    },

    isAlive(){
        return this.hp>0;
    },
}

const jerry = {
    name: 'jerry',
    hp: 500,
    atk: 20,

    attack(target) {
        target.hp -= this.atk;
        console.log(`${this.name} "phang" ${target.name}, gây ${this.atk} sát thương
        , ${target.name} còn ${target.hp} máu`);
    },
    isAlive(){
        return this.hp>0;
    },
}

// tom phang jerry
let round=1;
while(jerry.isAlive() && tom.isAlive()){
    console.log("Round "+round);
    if(round%2===0){
        tom.attack(jerry);
    }else{
        jerry.attack(tom);
    }
    round++;
}

// kiểm tra nhân vật thắng
if(tom.hp>0){
    console.log("Tom win");
}else{ console.log("Jerry win");}
