var items = [];

for (var t = 0; t < 100000; t++) {
    items.push({ value: t });
}

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

function total(items) {
    var s = 0;

    for (var i = 0; i < items.length; i++) {
        s+= items[i];
    }

    return s;
}

jsPerf.init(total);

for (var f0 = 0; f0 < 1000; f0++) {
    jsPerf.measure(upfrontLengthTest);
}

for (var f1 = 0; f1 < 1000; f1++) {
    jsPerf.measure(inlineLengthTest);
}

jsPerf.metrics();