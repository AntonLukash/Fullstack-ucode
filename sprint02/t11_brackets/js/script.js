function checkBrackets(str) {
    if (typeof str !== 'string' || !/\(|\)/.test(str)) {
        return -1;
    }

    let count = 0;
    let result = 0;

    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            if (count === 0) {
                result++;
            } else {
                count--;
            }
        }
    }

    result += count;

    return result;
}

