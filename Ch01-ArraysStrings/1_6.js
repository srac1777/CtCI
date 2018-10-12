const sComp = str => {
    let cch = str[0];
    let cc = 1;
    let res = "";

    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if(el !== str[i+1]){
            res += el
            res += cc
            cc = 1
        } else {
            cc += 1;
        }
        
    }

    if(res.length > str.length) return str;
    else return res;
}

console.log(sComp('abccccca'));
