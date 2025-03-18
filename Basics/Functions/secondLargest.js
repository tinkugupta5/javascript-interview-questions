function secondLargest(arr) {
    if (arr.length < 2) return null;

    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); 
console.log(secondLargest([5, 5, 5, 5])); 
console.log(secondLargest([3])); 
