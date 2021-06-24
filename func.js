function one(callback) {
    return callback ? callback(1) : 1
}
function two(callback) {
    return callback ? callback(2) : 2
}
function three(callback) {
    return callback ? callback(3) : 3
}
function four(callback) {
    return callback ? callback(4) : 4
}
function five(callback) {
    return callback ? callback(5) : 5
}


function plus(a) {
    return (b) => a + b
}
function minus(a) {
    return (b) => a - b
}
function divide(a) {
    return (b) => b / a
}
function mult(a) {
    return (b) => a * b
}