var items = [];
var perfResults = [];

for (var t = 0; t < 100000; t++) {
    items.push({ value: t });
}

// Thanks SO and Zurb - https://stackoverflow.com/questions/3178892/get-function-name-in-javascript
var functionName = function (fn) {
    if (Function.prototype.name === undefined) {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = (funcNameRegex).exec((fn).toString());
        return (results && results.length > 1) ? results[1].trim() : "";
    }
    else if (fn.prototype === undefined) {
        return fn.constructor.name;
    }
    else {
        return fn.prototype.constructor.name;
    }
};

var record = function (fn, stampDiff) {
    var fnName = functionName(fn); // Could memoize this.
    perfResults.push({ name: fnName, value: stampDiff });
};

var avg = function (items) {
    var len = items.length;
    var total = 0;

    if (len === 0) return 0;

    for (var i = 0; i < len; i++) {
        total += items[i];
    }

    return total / len;
};

var median = function (items) {
    items.sort(function (a, b) { return a - b; });

    var half = Math.floor(items.length / 2);

    if (items.length % 2) {
        return items[half];
    }
    else {
        return (items[half - 1] + items[half]) / 2.0;
    }
}

var metrics = function () {
    var report = {};

    for (var prop in perfResults) {
        if (perfResults.hasOwnProperty(prop)) {
            var r0 = perfResults[prop].name;

            if (typeof report[r0] === "undefined") {
                report[r0] = [];
            }

            report[r0].push(perfResults[prop].value);
        }
    }

    for (var r1 in report) {
        if (report.hasOwnProperty(r1)) {
            var r2 = {
                name: r1,
                min: Math.min(...report[r1]),
                max: Math.max(...report[r1]),
                avg: avg(report[r1]),
                median: median(report[r1])
            };

            console.table(r2);

        }
    }
};

var perf = function (fn) {
    var t0 = performance.now();
    var result = fn.apply(this, arguments);
    var t1 = performance.now();

    record(fn, (t1 - t0));

    return result;
};

function upfrontLengthTest() {
    var len = items.length;

    var doSomething = function (item) { };

    for (var i = 0; i < len; i++) {
        doSomething(items[i]);
    }
}

function inlineLengthTest() {
    var doSomething = function (item) { };

    for (var i = 0; i < items.length; i++) {
        doSomething(items[i]);
    }
}

function factorialTest() {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    factorial(10000);
}

for (var f0 = 0; f0 < 100; f0++) {
    perf(upfrontLengthTest);
}

for (var f1 = 0; f1 < 100; f1++) {
    perf(inlineLengthTest);
}

for (var f1 = 0; f1 < 100; f1++) {
    perf(factorialTest);
}

metrics();