function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true;
        }
    }
    return false;
}

module.exports = {
    every: every,
    some: some
};
