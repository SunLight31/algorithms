/* (2) реализуйте функцию squareDigits, которая принимает число, вернуть функция должна тоже число, которое
*      получается при конкатенировании возведенных к квадрат цифр переданного внутрь функции числа */
function squareDigits(num) {
    return +String(num)
        .split('')
        .map((element) => element ** 2)
        .join("");
}
console.log(squareDigits(9119)); // 9^2=81, 1^2=1 => 811181