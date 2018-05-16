# JsPerf

A JavaScript performance measuring tool.

## Features

* Ability to append an additional custom metric.
* Supply a custom output formatter.  The default is `console.table`.
* Modern browser support (IE10 and up).
* Measured in milliseconds, accurate to five thousandths of a millisecond (5 microseconds).
    * Uses the performance API under the covers.

### Upcoming Features

* Unit test coverage.
* An example custom formatter.
* Wire-up to HTTP sevice endpoint.
* [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Travis CI](https://travis-ci.org/).

# JsQueue

A JavaScript queue data structure implemented using two stacks.

## Features

* Straight forward API (only four methods: enqueue, dequeue, peek, size).
* Modern browser support (IE10 and up).
* Unit test coverage.

### Upcoming Features

* Performance testing using JsPerf. The array looping slows down based on the number of inputs.
* [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Travis CI](https://travis-ci.org/).
