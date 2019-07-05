/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(array = []) {
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
};
