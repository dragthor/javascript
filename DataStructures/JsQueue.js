var JsQueue = function () {
    var stack1 = [];
    var stack2 = [];

    var public = {
        // Returns the object at the beginning of the JsQueue without removing it.
        peek: function () {
            if (stack1.length === 0) return null;

            return stack1[0];
        },

        // Adds an object to the end of the JsQueue.
        enqueue: function (item) {
            stack1.push(item);
        },

        // Removes and returns the object at the beginning of JsQueue.
        dequeue: function () {
            stack2 = [];

            if (stack1.length === 0) return null;

            // console.log("stack1 before:" + JSON.stringify(stack1));

            for (var i = stack1.length - 1; i >= 0; i--) {
                stack2.push(stack1[i]);
            }

            // console.log("stack2 after:" + JSON.stringify(stack2));

            var r = stack2.pop();

            // console.log("stack2 after pop:" + JSON.stringify(stack2));

            stack1 = [];

            for (var i = stack2.length - 1; i >= 0; i--) {
                stack1.push(stack2[i]);
            }

            // console.log("stack1 after pop:" + JSON.stringify(stack1));

            return r;
        },

        // Returns the number of items in the queue.
        size: function () {
            return stack1.length;
        }
    };

    return public;
};