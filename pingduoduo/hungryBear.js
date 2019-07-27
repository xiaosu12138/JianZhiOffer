// 有n只小熊，他们有着各不相同的战斗力。每次他们吃糖时，会按照战斗力来排，战斗力高的小熊拥有优先选择权。前面的小熊吃饱了，后面的小熊才能吃。每只小熊有一个饥饿值，每次进食的时候，小熊们会选择最大的能填饱自己当前饥饿值的那颗糖来吃，可能吃完没饱会重复上述过程，但不会选择吃撑。
// 现在给出n只小熊的战斗力和饥饿值，并且给出m颗糖能填饱的饥饿值。
// 求所有小熊进食完之后，每只小熊剩余的饥饿值。
// 输入描述:
//     第一行两个正整数n和m，分别表示小熊数量和糖的数量。（n <= 10, m <= 100）
// 第二行m个正整数，每个表示着颗糖能填充的饥饿值。
// 接下来的n行，每行2个正整数，分别代表每只小熊的战斗力和当前饥饿值。
// 题目中所有输入的数值小于等于100。
// 输出描述:
//     输出n行，每行一个整数，代表每只小熊剩余的饥饿值。
// 输入例子1:
//     2 5
//     5 6 10 20 30
//     4 34
//     3 35
//
// 输出例子1:
//     4
//     0
//
// 例子说明1:
//     第一只小熊吃了第5颗糖
// 第二只小熊吃了第4颗糖
// 第二只小熊吃了第3颗糖
// 第二只小熊吃了第1颗糖

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0;
let bearNum = 0;
let foodList = [];
let bearList = [];
let temp = [];
let bearMap = new Map();
rl.on('line', function(line) {
    if(count === 0){
        bearNum = line.split(' ')[0];
        count++;
    }else if(count === 1){
        foodList = line.split(' ');
        foodList.forEach((item, index)=>{
            foodList[index] = parseInt(item);
        });
        count++;
    }else {
        temp = line.split(' ');
        temp.forEach((item, index) => {
            temp[index] = parseInt(item);
        });
        bearList.push(temp);
        bearMap.set(temp[0],temp[0]);
        bearNum--;
        if (bearNum === 0) help();
    }
});

function help(){
    bearList.sort((a,b)=>{return b[0] - a[0]});
    foodList.sort((a,b)=>{return b-a});
    let bearLastMap = new  Map();
    for(let i=0;i<bearList.length;i++){
        for(let j=0;;) {
            if(foodList[j] <= bearList[i][1]) {
                bearList[i][1] = bearList[i][1] - foodList[j];
                foodList.splice(j, 1);
            }else {
                j++;
            }
            if(j>=foodList.length) break;
        }
    }
    bearList.forEach(item=>{
        bearLastMap.set(item[0],item[1]);
    });
    bearMap.forEach(item=>{
        console.log(bearLastMap.get(item));
    })
}