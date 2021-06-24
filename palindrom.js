function palindrom (word) {
    word = word.toLowerCase();
    let wordLength = word.length;
    for (let i = 0; i < wordLength / 2; i++) {
        if (word[i] !== word[wordLength - i - 1]) {
            return false;
        }
    }
    return true;
}

function palindrom2 (word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('')
}