// use 'node script.js' to output the results

(function () {

    var log = console.log;
    log();
    log("Hello and welcome to the course!");
    log("We seem to be using");
    log("a lot of logs here.");
    log("Why don't we renaim it");
    log("to make it look better?");
    log("To do that, simply assign the function");
    log("'log' to another variable.");
    log("You can call it whatever you want.");
    log("I called mine 'line' to reflect the");
    log("way that I'm using it.");
    log();

    function doIf(cond, fn) {
        if(cond) {
            fn();
        }
    }

    const x = 1;

    doIf(x === 1, function () {
        log("x is equal to " + x);
    });

    doIf(x < 10 && x > 0, function () {
        log("x is between 0 and 10");
    });

    function callWithArgs(arg1, arg2, fn) {
        return fn(arg1, arg2);
    }

    callWithArgs(1, 2, add);
    callWithArgs(4, 2, substract);
    callWithArgs(1, 2, function(x, y) {
        return x * x + y * y; 
    });

    function add(x, y) {
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    function ifElse(cond, fn1, fn2) {
        if(cond) {
            fn1();
        } else {
            fn2();
        }
    }

    function createCounter(count) {
        return {
            increment: function() {
                count++;
            },
            currentValue: function() {
                return count;
            }
        }
    }

    var myCounter = createCounter(0);

    log(myCounter.currentValue());
    myCounter.increment();
    log(myCounter.currentValue());
    myCounter.increment();
    log(myCounter.currentValue());

    function createSafeVersion(fn) {
        return function(n, message) {
            if (n != null && typeof n === 'number') {
                if (message != null && typeof message === 'string') {
                    return fn(n, message);
                }
            }
        }
    }

    function printMessageNTimes(n, message) {
        for (var i = 0; i < n; i++) {
            log(message);
        }
    }

    function getNthLetter(n, string) {
        log(string.charAt(n));
    }

    function getSubstringOfLength(n, string) {
        log(string.substring(0, n));
    }

    var printMessageNTimesSafe = createSafeVersion(printMessageNTimes),
        getNthLetterSafe = createSafeVersion(getNthLetter),
        getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength);

    printMessageNTimesSafe(4, "Banana");
    getNthLetterSafe(2, "Javascript");
    getSubstringOfLengthSafe(5, "Hello and Welcome!");
 
})();