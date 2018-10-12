const palPerm = str => {
    let hsh = {};
    let i = 0;

    while(i < str.length){
        let el = str[i].toLowerCase();
        if(el !== ' '){
            if (!hsh[el]) {
                hsh[el] = 1;
            } else {
                hsh[el] += 1;
            }
        }

        i += 1;
    }

    let oddcounter = 0;
    let arr = Object.values(hsh);

    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 !== 0) oddcounter += 1;
        if(oddcounter > 1) return false;
    }
    return true;
}

console.log(palPerm('Tact Co'));
