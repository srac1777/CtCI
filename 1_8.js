const zMatrix = arr => {
    let pos_zero = findZero(arr);

    for(let i =0 ; i < pos_zero.length; i++){
        let pos = pos_zero[i];
        replacer(pos,arr);
    }
    return arr;
}

const replacer = (pos, arr) => {
    let row_idx = pos[0];
    let col_idx = pos[1];

    //rr
    for(let i =0 ; i<arr[row_idx].length; i++){
        arr[row_idx][i] = 0;
    }
    // cr
    for(let i = 0; i<arr.length; i++){
        arr[i][col_idx] = 0;
    }
}

const findZero = arr => {
    res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j]===0){
                res.push([i,j]);
            }
        }
    }
    return res;
}

console.log(zMatrix([[5,4,0,1,3],[2,9,8,4,2],[0,5,3,9,8],[7,6,3,4,5]]));
