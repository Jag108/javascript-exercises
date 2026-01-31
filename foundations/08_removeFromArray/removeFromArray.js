const removeFromArray = function(array, ...numbers) {
  for(const number of numbersArr){
    if(array.includes(number)){
        let i = array.indexOf(number);
        array.splice(i, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
