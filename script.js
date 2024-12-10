function InsertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
                
            }
        }
        
    }
    return arr
}
console.log(InsertionSort([5, 3, 8, 6]));
