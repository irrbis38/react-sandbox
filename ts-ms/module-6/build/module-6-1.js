var returnNewNumber = {
    value: 25,
    message: 'Hello!'
};
var returnNewString = {
    value: 'Hello!',
    message: 25
};
var processIdentity = /** @class */ (function () {
    function processIdentity(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentity.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentity;
}());
var processor = new processIdentity(100, 'Hello');
processor.process();
processor.value = 200;
