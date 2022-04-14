//조합 구하는 법 구글링해서 함

function isPrime(n) {
    let remain = 0;
    for(i=1; i<n; i++){
        if(n % i == 0) remain ++;
    }
    // console.log(remain == 1)
    return remain == 1
}


const getCombinations = (arr, num) => { const results = []; 
        if (num === 1) return arr.map(v => [v]); arr.forEach((fixed, index, origin) => { 
            const rest = origin.slice(index + 1); 
            const combinations = getCombinations(rest, num - 1); 
            const attached = combinations.map(v => [fixed, ...v]); 
            results.push(...attached);
        }); 
            return results; 
        }

const solution = (nums)=> {
    let primeCnt = 0;
    if (nums.length == 3) return console.log(Number(isPrime(nums[0]+nums[1]+nums[2])))
    else  {
        getCombinations(nums, 3).map((res) => {
            if(isPrime(res[0]+res[1]+res[2])) primeCnt++;
        })
        return console.log(primeCnt);
    }
    
}

solution([1,2,7,6,4])