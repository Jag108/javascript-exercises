const removeFromArray = function(array, ...numbers) {
    for(const number of numbers){
        let i = array.indexOf(number);
        for(i; array.includes(number);){
            array.splice(i, 1);
        }
    }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
