/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
    let cancelled = false;

    let resolvePromise;
    let rejectPromise;

    const promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;

        function step(method, value) {
            let result;

            try {
                result = method.call(generator, value);
            } catch (err) {
                reject(err);
                return;
            }

            const { value: yieldedValue, done } = result;

            if (done) {
                resolve(yieldedValue);
                return;
            }

            yieldedValue
                .then(val => {
                    if (!cancelled) {
                        step(generator.next, val);
                    }
                })
                .catch(err => {
                    if (!cancelled) {
                        step(generator.throw, err);
                    }
                });
        }

        step(generator.next);
    });

    function cancel() {
        if (cancelled) return;
        cancelled = true;

        try {
            const result = generator.throw("Cancelled");

            if (result.done) {
                resolvePromise(result.value);
            } else {
                result.value
                    .then(resolvePromise)
                    .catch(rejectPromise);
            }
        } catch (err) {
            rejectPromise(err);
        }
    }

    return [cancel, promise];
};