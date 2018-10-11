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
