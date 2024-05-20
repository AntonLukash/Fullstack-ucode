function isValidNumber(num) {
    return !isNaN(num) && num >= 1 && num <= 10;
}

function promptForNumber() {
    var num = prompt("Please enter a number between 1 and 10:");
    while (!isValidNumber(num)) {
        num = prompt("Invalid input. Please enter a number between 1 and 10:");
    }
    return parseInt(num);
}

var number = promptForNumber();

var idiom;
switch (number) {
    case 1:
        idiom = "Back to square 1";
        break;
    case 2:
        idiom = "Goody two-shoes";
        break;
    case 3:
    case 6:
        idiom = "Two's company, three's a crowd";
        break;
    case 4:
    case 9:
        idiom = "Counting sheep";
        break;
    case 5:
        idiom = "Take five";
        break;
    case 7:
        idiom = "Seventh heaven";
        break;
    case 8:
        idiom = "Behind the eight-ball";
        break;
    case 10:
        idiom = "Cheaper by the dozen";
        break;
}

alert(idiom);

