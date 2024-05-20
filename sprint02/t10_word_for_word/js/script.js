function addWords(obj, wrds) {
    const wordsArray = obj.words.split(' ').filter(function(word) {
        return word.trim() !== '';
    });
    const newWordsArray = wrds.split(' ').filter(function(word) {
        return word.trim() !== '';
    });
    const uniqueWords = [];
    for (let word of wordsArray.concat(newWordsArray)) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    obj.words = uniqueWords.join(' ');
}

function removeWords(obj, wrds) {
    const wordsArray = obj.words.split(' ').filter(function(word) {
        return word.trim() !== '';
    });
    const wordsToRemove = {};
    wrds.split(' ').filter(function(word) {
        return word.trim() !== '';
    }).forEach(function(word) {
        wordsToRemove[word] = true;
    });
    const updatedWordsArray = wordsArray.filter(function(word) {
        return !wordsToRemove[word];
    });
    obj.words = updatedWordsArray.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    const wordsArray = obj.words.split(' ').filter(function(word) {
        return word.trim() !== '';
    });
    const oldWordsSet = {};
    oldWrds.split(' ').filter(function(word) {
        return word.trim() !== '';
    }).forEach(function(word) {
        oldWordsSet[word] = true;
    });
    const newWordsArray = newWrds.split(' ').filter(function(word) {
        return word.trim() !== '';
    });
    for (let i = 0; i < wordsArray.length; i++) {
        if (oldWordsSet[wordsArray[i]]) {
            wordsArray[i] = newWordsArray.shift();
        }
    }
    obj.words = wordsArray.join(' ');
}

