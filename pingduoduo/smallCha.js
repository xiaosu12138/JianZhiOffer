//给定一个长度为偶数的数组arr，将该数组中的数字两两配对并求和，
//在这些和中选出最大和最小值，请问该如何两两配对，才能让最大值和最小值的差值最小？
let count = 0;
let N = 0;
let numList = [];
while(line=readline()){
    if(count === 0){
        N = parseInt(line);
        count++;
    }else{
        line.split(' ').forEach(item=>{
            numList.push(parseInt(item));
        });
        numList.sort((a,b)=>{return a-b});
        help();
    }
}

function help(){
    let sumList = [];
    for(let i=0;i<N/2;i++){
        sumList.push(numList[i]+numList[N-i-1]);
    }
    console.log(Math.max.apply(null,sumList)-Math.min.apply(null,sumList));
}