const removeFromArray = function(array, ...numbers) {
    let removedArr = [];
    for(let i = 0; i < array.length - 1; ++i){
        for(const arg of numbers){
            if(array[i] === arg){
               removedArr = array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
