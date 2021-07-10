// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    let result = [];
    matrix.reduce(function (prev, current, index) {
        if (index % 2 === 1) {
            current.reverse().forEach((item) => result.push(item));
        } else {
            current.forEach((item) => {
                result.push(item);
            });
        }
    }, matrix[0]);
    return result;
};
