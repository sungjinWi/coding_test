
function solution (absolutes, signs) {
    let positiveSum = 0;
    let negativeSum = 0;
    for(i=0; i < absolutes.length; i++){
        if(signs[i] == true) positiveSum += absolutes[i];
        else negativeSum += absolutes[i];
    }
    return console.log(positiveSum-negativeSum)
    
}

solution([3,4,7],[true, false, true])
