export const isMobile = () =>{

    let screenLimit = 1000;

    if(window.innerWidth <= screenLimit){
        return true;
    }else{
        return false;
    }
}

export const getRandomNumber = (pickNum, limitNum) =>{
    //뽑으려는 수 3개, 뽑으려는 수의 범위 배열의 길이
    let tempNum = 0;
    let randomArray = [];

    for(let i=0; i<pickNum; i++){
        tempNum = Math.floor(Math.random() * limitNum);
        randomArray[i] = tempNum;
        for(let j=0; j<i; j++){
            if(randomArray[i] === randomArray[j]){
                i--;
            }
        }
    }

    return randomArray;
}

export const loadCompleteDo = (func) =>{
    let timer = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(timer);
            func();
        }
    }, 100);
}