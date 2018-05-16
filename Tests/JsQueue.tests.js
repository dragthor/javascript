QUnit.test("able to queue items into queue", function (assert) {
    var jsQueue = new JsQueue();

    jsQueue.enqueue(10);
    jsQueue.enqueue(12);
    jsQueue.enqueue(9);
    jsQueue.enqueue(100);

    assert.equal(jsQueue.size(), 4);
});

QUnit.test("able to peek into queue", function (assert) {
    var jsQueue = new JsQueue();

    jsQueue.enqueue(10);
    jsQueue.enqueue(12);
    jsQueue.enqueue(9);
    jsQueue.enqueue(100);

    assert.equal(jsQueue.peek(), 10);

    assert.equal(jsQueue.size(), 4);
});

QUnit.test("able to dequeue item from queue", function (assert) {
    var jsQueue = new JsQueue();

    jsQueue.enqueue(10);
    jsQueue.enqueue(12);
    jsQueue.enqueue(9);
    jsQueue.enqueue(100);

    assert.equal(jsQueue.dequeue(), 10);
    assert.equal(jsQueue.dequeue(), 12);

    assert.equal(jsQueue.peek(), 9);

    assert.equal(jsQueue.size(), 2);
});

QUnit.test("no items in the queue then size should be zero", function (assert) {
    var jsQueue = new JsQueue();

    assert.equal(jsQueue.size(), 0);
});

QUnit.test("no items in the queue then dequeue null", function (assert) {
    var jsQueue = new JsQueue();

    assert.ok(jsQueue.dequeue() === null);
});

QUnit.test("no items in the queue then peek null", function (assert) {
    var jsQueue = new JsQueue();

    assert.ok(jsQueue.peek() === null);
});