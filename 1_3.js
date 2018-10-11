const URLify = (str, len) => {
    let cL = 0;
    let arr = str.split("");
    
    let i = 0;

    while(cL < len){
        if(arr[i] === ' '){
            arr[i] = '%20';
        } 
        cL += 1;
        i += 1;
    }
    return arr.slice(0,cL).join("");
}

console.log(URLify("Mr John Smith      ", 13));
