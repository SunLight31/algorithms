function withoutRepeat (arr) {
    const result = [];
    const dictionary = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
    }
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (dictionary[item] === 1) {
            result.push(item);
        }
    }
    return result;
}