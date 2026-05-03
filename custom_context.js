/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const key = Symbol();

    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 * якщо зробити так:

context.fn = this;

то в об’єкті вже може бути поле fn, і ми його зламаємо.

Symbol() створює унікальний ключ, який точно не конфліктує з іншими полями.
 */