# jsPerf

A javascript performance measuring tool primarily focused on the web browser.

## Features

* Ability to append a custom metric.
* Supply a custom output formatter.  The default is `console.table`.
* Modern browser support.  Probably IE10 and up.
* Measured in milliseconds, accurate to five thousandths of a millisecond (5 microseconds).
    * Uses the performance API under the covers.
