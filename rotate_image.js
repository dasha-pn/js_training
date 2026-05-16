var rotate = function(matrix) {
    let rotatedMatrix = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            rotatedMatrix[i][j] = matrix[matrix.length - 1 - j][i];
        }
    }
    return rotatedMatrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// Поворот на 90° складається з 2 кроків:

// Транспонувати матрицю
// Реверснути кожен рядок

var rotate = function(matrix) {

    // transpose
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {

            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];
        }
    }

    // reverse rows
    for (let row of matrix) {
        row.reverse();
    }
};