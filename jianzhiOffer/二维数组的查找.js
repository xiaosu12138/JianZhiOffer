/**
 * @return {boolean}
 */
function Find(target, array)
{
    // write code here
    let x = 0;
    let y = array[0].length-1;
    for(;x<array.length && y>=0;){
        if(target > array[x][y]){
            x++;
        }else if(target < array[x][y]){
            y--;
        }else{
            return true;
        }
    }
    return false;
}
module.exports = {
    Find : Find
};