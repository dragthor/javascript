var JsLinkedListNode = function (value) {
    var public = {
        value: function () {
            return value;
        },

        next: function () {

        },

        previous: function () {

        },

        // Return the JsLinkedList that JsLinkedListNode belongs to as an Array.
        list: function () {

        }
    };

    return public;
};

var JsLinkedList = function () {
    var public = {
        // Adds a new node containing the specified value at the start of the JsLinkedList.
        addFirst: function (node) {

        },

        // Adds a new node containing the specified value at the end of the JsLinkedList.
        addLast: function (node) {

        },

        // Adds a new node before the specified existing node in the JsLinkedList.
        addBefore: function (newNode, node) {

        },

        // Adds a new node after the specified existing node in the JsLinkedList.
        addAfter: function (newNode, node) {

        },

        // Gets the first node in the JsLinkedList.
        first: function () {

        },

        // Gets the last node in the JsLinkedList.
        last: function () {

        },

        // Returns the entire JsLinkedList item as an Array.
        list: function () {

        },

        // Number of nodes actually contained in the JsLinkedList.
        size: function () {
            return 0;
        },

        // Removes the node at the start of the JsLinkedList.
        removeFirst: function () {

        },

        // Removes the node at the end of the JsLinkedList.
        removeLast: function () {

        },

        // Removes all nodes.
        clear: function () {

        }
    };

    return public;
};