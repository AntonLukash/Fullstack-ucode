function checkDivision(beginRange, endRange) {
    for (var i = beginRange; i <= endRange; i++) {
        var description = i + " ";
        if (i % 2 === 0) {
            description += "is even";
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            description += (description.length > i.toString().length + 1 ? ", " : "") + "is a multiple of 3";
        } else if (i % 3 === 0) {
            description += (description.length > i.toString().length + 1 ? ", " : "") + "a multiple of 3";
        }
        if (i % 10 === 0) {
            description += (description.length > i.toString().length + 1 ? ", " : "") + "a multiple of 10";
        }
        console.log(description);
    }
}

var beginRange = +prompt('Enter the beginning of the range:', '1');
var endRange = +prompt('Enter the end of the range:', '100');

if (beginRange != "NaN" && endRange != "NaN") {
    checkDivision(beginRange, endRange);
} else {
    console.log("Invalid input");
}

