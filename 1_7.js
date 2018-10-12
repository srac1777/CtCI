const rotateImage = arr => {
    reverser(arr);
    console.log(arr);
    transposer(arr);
    return arr;
}

const reverser = arr => {
    for(let i = 0; i < arr.length; i++){
        let subarr = arr[i]
        for(let j = 0; j < Math.floor(subarr.length / 2); j++){
            
            let t = subarr[j];
            subarr[j] = subarr[(subarr.length - 1) - j];
            subarr[(subarr.length - 1) - j] = t;

        }
    }
}

const transposer = arr => {
    for(let i = 0; i < arr.length; i++ ){
        for(let j = i + 1 ; j < arr[i].length; j++){
            let t = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = t;
        }
    }
}

console.log(rotateImage([['a','b','c','d'],
                        ['e','f','g','h'],
                        ['i','j','k','l'],
                        ['m','n','o','p']]))