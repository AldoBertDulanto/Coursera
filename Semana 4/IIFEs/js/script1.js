/* Part 1 Namespaces
var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov";
yaakovGreeter.sayHello = function() {
    console.log("Hello " + yaakovGreeter.name)
}
*/

(function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function() {
        console.log(greeting + yaakovGreeter.name)
    }

    window.yaakovGreeter = yaakovGreeter; //el window, expone ese yaakovGreeter como una variable global

})(window); //Se va a ejecutar todo ni bien lo llame
