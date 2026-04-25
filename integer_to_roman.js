/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ];

    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};

// Ми йдемо від найбільших значень до найменших
// Кожен раз "відкушуємо" максимально можливе число
// Включаємо спеціальні випадки (900, 400, 90, 40, 9, 4), щоб не ламати правила
// Час: O(1) (бо максимум 13 перевірок)
// Памʼять: O(1)