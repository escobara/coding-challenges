function MaxStack() {
    this.values = [];
    this.topEntry = null;
    this.peekMax = null;

    this.push = function(value) {
        this.values.push(value)
        this.topEntry = value;
        this.peekMax()
    }


    this.pop = function(value) {
        if(this.values.length === 0) {
            throw new ArrayEmptyException('Array is Empty');
        } else {
            var top = this.values.pop();
            this.topEntry = this.values[this.values.length-1]
            this.peekMax();
            return top;
        }
    }

    this.top = function() {
        if(this.values.length === 0) {
            throw new ArrayEmptyException('Array is Empty');
        } else {
            return this.topEntry;
        }
    }


    this.peekMax = function() {
        if (this.values.length === 0) {
            throw new ArrayEmptyException('Array is Empty');
        } else {
            return  Math.max(...this.values);
        }
    }

    this.popMax = function() {
        if (this.values.length === 0) {
            // Create an instance of the object type and throw it
            throw new ArrayEmptyException('Array is Empty');
        } else {
            var peekMaxToBeRemoved = this.peekMax()
            var index = this.values.lastIndexOf(peekMaxToBeRemoved)
            this.values.splice(index, 1)
        }
        return  peekMaxToBeRemoved;
    }

    this.getTopEntry = function() {
       return this.values[this.values.length - 1]
    }
}

function ArrayEmptyException(message) {
    this.message = message;
    this.name = "Array Empty Exception";
}

ArrayEmptyException.prototype.toString = function() {
    return `${this.name}: '${this.message}'`
}

var stack = new MaxStack();

stack.push(5);
stack.push(1);
stack.push(5);
stack.top();
console.log('stack.top(): ', stack.top());
console.log(stack.values);
console.log('stack.popMax(): ', stack.popMax());
console.log(stack.values)

// stack.peekMax();
console.log('stack.peekMax(): ', stack.peekMax());
console.log('stack.pop(): ', stack.pop());
console.log(stack.values);