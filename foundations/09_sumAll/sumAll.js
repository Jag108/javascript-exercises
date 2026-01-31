const sumAll = function(num1, num2) {
    let start = 0;
    let end = 0;
    let total = 0;

    if(num1 < num2){
        start = num1;
        end = num2;
    }else{
        start = num2;
        end = num1;
    }

    for(start; start <= end; ++start){
        total += start;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
