// use 'node script.js' to output the results

(function () {

    var _ = require("lodash");

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

    var numbers = [1,2,3,4,5],
        numbersCubed = _.map(numbers, function(number) {
            return number * number * number ;
        });

    log(numbersCubed);
    
    numbersOdd = _.filter(numbersCubed, function(number) {
        return number % 2 == 1;
    });

    log(numbersOdd);

    var employees = [
        {name: "John", salary: 50000},
        {name: "Susan", salary: 60000},
        {name: "Greg", salary: 120000},
        {name: "Mary", salary: 100000}
    ],
    dueForARaise = _.filter(employees, function(employee) {
        return employee.salary < 70000;
    });
 
    log(dueForARaise);

    var some = _.some(employees, function(employee) {
        return employee.salary < 70000;
    });

    log(some);

    var every = _.every(numbersCubed, function(numberCubed) {
        return typeof numberCubed === 'number';
    });

    log(every);

    var shoppingList = [
        {name: "Eggs", price: 4.99},
        {name: "Milk", price: 3.99},
        {name: "Bananas", price: 2.79},
        {name: "Beer", price: 6.99}
    ];

    var totalCost = _.reduce(shoppingList, function(acc, item) {
        return acc + item.price;
    }, 0);

    log(totalCost);

    var employees = [
        {name: "John", salary: 60000, age: 27, gender: 'M'},
        {name: "Mary", salary: 110000, age: 50, gender: 'F'},
        {name: "Susan", salary: 50000, age: 21, gender: 'F'},
        {name: "Greg", salary: 100000, age: 45, gender: 'M'},
        {name: "Jenny", salary: 90000, age: 39, gender: 'F'},
        {name: "Barb", salary: 95000, age: 36, gender: 'F'}
    ];

    var males = _.filter(employees, function(employee) {
        return employee.gender === 'M';
    });

    var maleAges = _.map(males, function(male) {
        return male.age;
    });

    var maleAgeTotal = _.reduce(maleAges, function(acc, age) {
        return acc + age;
    });

    var maleAgeAverage = maleAgeTotal / males.length;

    log("Average male ages: " + maleAgeAverage);

    var females = _.filter(employees, function(employee) {
        return employee.gender === 'F';
    });

    var femaleAges = _.map(females, function(female) {
        return female.age;
    });

    var femaleAgeTotal = _.reduce(femaleAges, function(acc, age) {
        return acc + age;
    });

    var femaleAgeAverage = femaleAgeTotal / females.length;

    log("Average female ages: " + femaleAgeAverage);

    var fs = require('fs');
    
    fs.readFile('message.txt', 'utf8', function(err, data) {
        if (err) throw err;
        log('Async call: ' + data);
    });

    function add(x, y, z) {
        return x + y + z;
    }

    function partiallyApply(fn, x, y) {
        return function(z) {
            return fn(x, y, z);
        }
    }

    var add5and2 = partiallyApply(add, 5, 2);
    log(add5and2(3));

    function recursion(x) {
        log('x is ' + x);
        if (x > 0) {
            setTimeout(function(fn) {
                fn = recursion(x - 1);
            }, 1000);
        } else {
            setTimeout(function() {
                log('The End');
            }, 1000);
            
        }
    }

    recursion(10);

})();