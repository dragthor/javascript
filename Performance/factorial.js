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

for (var f1 = 0; f1 < 100; f1++) {
    jsPerf.measure(factorialTest);
}

jsPerf.metrics();
