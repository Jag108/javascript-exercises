const repeatString = function(str, num) {
    
    
    if(0 > num){
        return str = 'ERROR';
    }
    
    let repeated = "";
    
    for(let i = 1; i <= num; ++i){

        repeated += str;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
