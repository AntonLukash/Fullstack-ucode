String.prototype.removeDuplicates = function removeDuplicates() {
    return this.split(/\s+/).filter((word, index, array) => array.indexOf(word) === index).join(' ');
}

