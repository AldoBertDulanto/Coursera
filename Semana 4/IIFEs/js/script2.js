/* Part 1 Namespaces
var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHi = function() {
    console.log("Hi " + johnGreeter.name)
}
*/

(function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi "; //global 
    johnGreeter.sayHi = function() {
        console.log(greeting + johnGreeter.name)
    }
    
    window.johnGreeter = johnGreeter;

})(window);

