function concat(str1, str2) {
    innerConcat.count = 0;

    function innerConcat() {
        let str2cpy = prompt("Enter string: ", "");
        innerConcat.count++;  
        if (str2cpy === null) {
            return str1;
        }
        return str1 + " " + str2cpy;
    }

    if (str2 === undefined ) {
        let result = innerConcat;
        return result;
    }
    else{
        let result = str1 + " " + str2;
        return result;
    }
}

