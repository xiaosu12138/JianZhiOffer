//给定一个无序数组，包含正数、负数和0，要求从中找出3个数的乘积，使得乘积最大，要求时间复杂度：O(n)，空间复杂度：O(1)
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0;
let N = 0;
let inputList = [];
rl.on('line', function(line) {
    switch (count) {
        case 0:
            N = parseInt(line);
            count++;
            break;
        default:
            inputList = line.split(' ');
            inputList.forEach((item, index)=>{
                inputList[index] = parseInt(item);
            });
            rl.close();
            help();
            break;
    }
});
function help(){
    if(N<3) return null;
    let numList = [inputList[0],inputList[1],inputList[2]];
    numList.sort((a,b)=>{return a-b});
    let small = numList[0];
    let between = numList[1];
    let big = numList[2];
    for(let i=3;i<N;i++){
        if(inputList[i] > big) {
            small = between;
            between = big;
            big = inputList[i];
        }else if(inputList[i] > between){
            small = between;
            between = inputList[i];
        }else if(inputList[i] > small){
            small = inputList[i];
        }
    }
    console.log(small*between*big);
}