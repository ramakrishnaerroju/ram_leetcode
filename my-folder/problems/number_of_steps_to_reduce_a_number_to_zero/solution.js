/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (number) {
    let counter = 0;

    while (number > 0) {
        counter++;
        if ((number % 2) == 0) {
            number /= 2;
        } else {
            number -= 1
        }
    }
    return counter;

};