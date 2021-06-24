function fibonachi(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonachi(n-1) + fibonachi(n-2)
}

function iterFib(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <=2 ) {
        return 1;
    }
    let prev = 1;
    let result = 1;
    for (let i = 1; i < n - 2; i++) {
        let tmp = result;
        result += prev;
        prev = tmp;
    }
    return result;
}