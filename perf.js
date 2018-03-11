var jsPerf = {
    perfResults: [],
    
    customMetric : undefined,

    init: function(customMetric) {
        var self = this;

        self.perfResults = [];

        if (typeof customMetric !== "undefined") {
            self.customMetric = customMetric;
        }
    },

    record: function (fn, stampDiff) {
        var self = this;
        var fnName = self.functionName(fn); // Could memoize this.

        self.perfResults.push({ name: fnName, value: stampDiff });
    },

    measure: function (fn) {
        var self = this;
        var t0 = performance.now();
        var result = fn.apply(this, arguments);
        var t1 = performance.now();

        self.record(fn, (t1 - t0));

        return result;
    },

    avg: function (items) {
        var len = items.length;
        var total = 0;

        if (len === 0) return 0;

        for (var i = 0; i < len; i++) {
            total += items[i];
        }

        return total / len;
    },

    median: function (items) {
        items.sort(function (a, b) { return a - b; });

        var half = Math.floor(items.length / 2);

        if (items.length % 2) {
            return items[half];
        }
        else {
            return (items[half - 1] + items[half]) / 2.0;
        }
    },

    metrics: function (formatter) {
        var self = this;
        var report = {};
        var callback = formatter || console.table;

        for (var prop in self.perfResults) {
            if (self.perfResults.hasOwnProperty(prop)) {
                var r0 = self.perfResults[prop].name;

                if (typeof report[r0] === "undefined") {
                    report[r0] = [];
                }

                report[r0].push(self.perfResults[prop].value);
            }
        }

        for (var r1 in report) {
            if (report.hasOwnProperty(r1)) {
                var r2 = {
                    name: r1,
                    count: report[r1].length,
                    min: Math.min(...report[r1]),
                    max: Math.max(...report[r1]),
                    avg: self.avg(report[r1]),
                    median: self.median(report[r1])
                };

                if (typeof self.customMetric !== "undefined") {
                    r2.custom = self.customMetric(report[r1]);
                }
                
                callback(r2);
            }
        }
    },

    // Thanks SO and Zurb
    // https://stackoverflow.com/questions/3178892/get-function-name-in-javascript
    // https://github.com/zurb/foundation-sites/blob/develop/js/foundation.core.js
    functionName: function (fn) {
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
    },
};