function addUp(num){
    num= parseInt
    let sum =0;
    for (let index = 1; index < (num+1); index++) {
        
        sum +=index;
    }
    return sum;
}

function largestSwap(num){
    num = parseInt(num)
    var newNum= num.toString();
    newNum= newNum.split("");
    newNum= newNum.reverse();
    newNum= newNum.join("");
    newNum= Number(newNum);

    if(num < newNum){
        console.log("false");
        return false;
    }
    else if(num > newNum){
        console.log("true");
        return true;
    }
}

// array of numbers

function arrayOfNumbers(array){
    let minNumber =array[0];
    let maxNumber =array[0]
    for (let index = 0; index < array.length; index++) {
        if(array[index] > minNumber){
            minNumber = array[index];
        }
        if(array[index] > minNumber){
        maxNumber = array[index];
        }
        
    }
    return [minNumber, maxNumber];
}

// tracking santa

function timeForMilkAndCookies(date){
    const [month, day] = [date.getMonth(), date.getDate()];

    if (day===24 && month===11) {
        return true;
    }
    else return false;
}


function highestPair(array){
    return (new Set(array)).size !== array.length;
}


function possibleBonus(x,b){
    if(x===(b) || x>(b+6) || x>(b)) return false;
    else return true;
}

function encryptMe(message, key){
    message= message.toString();
    let newMessage= message.split("");
    newMessage= newMessage.reverse();
    newMessage= newMessage.join(key);
    
    return newMessage;
}

console.log(encryptMe("ab c","abc ab"))


