// const oneAway = (str1, str2) => {
//     if(Math.abs(str1.length - str2.length) > 1) return false;
//     let diff_counter = 0;
//     let str1_hsh = createHash(str1);
//     let str2_hsh = createHash(str2);
//     let str1_keys = Object.keys(str1_hsh);

//     for (let i = 0; i < str1_keys.length; i++) {
//         const el = str1_keys[i];
//         if(str1_hsh[el] !== str2_hsh[el]){
//             diff_counter += 1;
//         }

//         if (diff_counter > 1) return false;
        
//     }
//     return true;
// }

// const createHash = (str) => {
//     let hsh = {};
//     for(let i= 0; i < str.length; i ++) {
//         if(!hsh[str[i]]){
//             hsh[str[i]] = 1;
//         } else {
//             hsh[str[i]] += 1;
//         }
//     }
//     return hsh;
// }

// console.log(oneAway("pale","plea"));

const oneAway = (str1, str2) => {
    if(Math.abs(str1.length - str2.length) > 1) return false;
    let j = 0;
    let dc = 0;
    let itr,chk;
    let flag = 0;

    if(str1.length !== str2.length) flag = 1;

    if( str1.length > str2.length){
        itr = str2;
        chk = str1;
    } else {
        itr = str1;
        chk = str2;
    }

    for(let i = 0; i < itr.length; i++) {
        const el = itr[i];
        if(el !== chk[j]){
            dc += 1;
            if(flag) j+=1
        }
        if(dc > 1) return false;
        j+=1;
    }
    return true;
}

console.log(oneAway("pale","bale"));
