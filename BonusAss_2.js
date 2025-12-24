var findKthPositive = function(arr, k) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] - (i + 1) >= k) {
            return k + i;
        }
    }

    return k + n; 
};
console.log(findKthPositive([2,3,4,7,11], 5)); // 9
console.log(findKthPositive([1,2,3,4], 2));    // 6
