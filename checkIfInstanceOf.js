/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === classFunction.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// В JS все тримається на prototype chain.
// Ми просто піднімаємось по ланцюжку прототипів:
// obj → __proto__ → __proto__ → ... → null

// Чому не instanceof
// бо JS автоматично обгортає примітив в об’єкт (Number)