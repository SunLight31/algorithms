Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw TypeError('${callback} is not a function');
    }
    if (this.length === 0 && arguments.length === 1) {
        throw TypeError("Reduce of empty array with no initial value");
    }

    let startIndex = arguments.length === 1 ? 1 : 0;
    let result = arguments.length === 1 ? this[0] : initialValue;
    const length = this.length;
    for (let i = startIndex; i < length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

console.log(
    [1, 2, 3, 4, 5].myReduce((acc, elem, index, arr) => {
        if (index % 2) {
            return acc + elem;
        }
        return acc;
    }, undefined)
); // => 6
