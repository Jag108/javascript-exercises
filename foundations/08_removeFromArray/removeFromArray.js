const removeFromArray = function(array, ...args) {
    for(const arg of args){
        let i = array.indexOf(arg);
        for(i; array.includes(arg);){
            array.splice(i, 1);
        }
    }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
