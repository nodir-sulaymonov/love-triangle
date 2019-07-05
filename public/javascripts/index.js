function loveTriangle(array = []) {
    let count =0;
    for (let i = 0; i < array.length; i++) {
        let a = array[i];
        let b = array[a-1];
        let c = array[b-1];
        if(c === i+1){
            count++;
        }
    }

    return Math.floor(count/3);
}

console.log(loveTriangle([2, 3, 1, 5, 6, 4, 8, 9, 7, 11, 12, 10, 13, 9, 13, 2, 15, 13, 12, 11]));