// 你在玩一个回合制角色扮演的游戏。现在你在准备一个策略，以便在最短的回合内击败敌方角色。在战斗开始时，
// 敌人拥有HP格血量。当血量小于等于0时，敌人死去。一个缺乏经验的玩家可能简单地尝试每个回合都攻击。但是你知道辅助技能的重要性。
// 在你的每个回合开始时你可以选择以下两个动作之一：聚力或者攻击。
//     聚力会提高你下个回合攻击的伤害。
//     攻击会对敌人造成一定量的伤害。如果你上个回合使用了聚力，那这次攻击会对敌人造成buffedAttack点伤害。
//     否则，会造成normalAttack点伤害。
// 给出血量HP和不同攻击的伤害，buffedAttack和normalAttack，返回你能杀死敌人的最小回合数。
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0;
let HP = 0;
let normal = 0;
let buffer = 0;
rl.on('line', function(line) {
    switch (count) {
        case 0:
            HP = parseInt(line);
            count++;
            break;
        case 1:
            normal = parseInt(line);
            count++;
            break;
        default:
            buffer = parseInt(line);
            rl.close();
            help();
            break;
    }
});
function help(){
    let result = 0;
    if(buffer > 2*normal){
        result = Math.floor(HP/buffer)*2;
        let rest = HP - result*buffer/2;
        if(rest !== 0){
            if(rest>normal) result++;
            result++;
        }
    }else{
        result = Math.ceil(HP/normal);
    }
    console.log(result);
}