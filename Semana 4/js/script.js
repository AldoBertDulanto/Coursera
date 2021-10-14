//var x = "Hello World!";
//Esto es un comentario en JavaScript

//Creando funciones a= function name
//function a (){}

//Creando funciones a= function name
//function compare (x,y){
//    return x>y;
//}

/*
var message = "in global";
console.log("global: message ="+ message);

var a = function (){
    var message= "inside a";
    console.log("a: message="+ message);
    //tomara el valor de message local, ya que esta definida aca
    function b (){
        console.log("b: message="+ message)
        //tomara el valor de message local A
    }
    b(); //Llamo a la funcion b
}


function b (){
    console.log("b: message="+ message)
    //tomara el valor de message global, aunque se ejecute dentro de la funcion A
}


//ejecuto la funcion
a()

firstName: "Aldo";
lastName: "Bert";
social:{
    facebook:"AldoBert";
    instagram:"AldoBertDulanto";
}

*/
//Read-only values
//Boolean (0 o 1)
//Undefined(sin valor)
//Null
//Number (valor numerico, es un double 64 bits)
//String

/*
var x;
console.log(x);

if (x == undefined){
    console.log("x is undefined");
}

x = 5;
if(x == undefined){
    console.log("x is undefined");
}
else{
    console.log("x has been defined");
}
*/

var string = "Hello";
string += " World";
console.log(string + "!")

//Math operators
console.log((5 + 4) / 3)
console.log(undefined / 5) //nos servira para cuando la variable no es un numero

var x = 4, y = 4;
if (x == y){
    console.log("x=4 is equal to y=4")
} 
x="4"; //String
//Javascript convierte ambos datos al mismo tipo de dato "String" automaticamente
if(x == y){
    console.log("x='4' is equal to y=4")
}

//Triple equals, hace que deban ser mismo tipo de dato tmb
if(x === y){
    console.log("x='4' is equal to y=4")
}
else{
    console.log("x='4' is not equal to y=4")
}

//El termino or es representado por ||
if( false || null || undefined || "" || 0 || NaN){
    console.log("This line won't ever execute");
}
else{
    console.log("All false");
}

//Si todo es True para eso usamos &&
if( true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}

//Es buena practica poner las columnas { al inicio de cada funcion o en ifs
//if{
//for{

//For Loop
var sum=0;
for(var i = 0; i < 10; i++){
    console.log(i)
    sum = sum + i;
}
console.log("Sum of 0 through 9 is: " + sum)

//Default values
/*
function orderChickenWith(sideDish){
    if(sideDish === undefined){
        sideDish = "whatever!"
    }
    console.log("Chicken with " + sideDish);
}
*/
//Lo mismo pero mas corto
function orderChickenWith(sideDish){
    sideDish = sideDish || "Whatever2!"; //nueva linea, reemplaza el if
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//Creating Objects
var company = new Object();
company.name = "Facebook";
//Objeto dentro de un objeto
company.ceo= new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is "+company.ceo.firstName)

console.log(company["name"]);
company.$stock= 110;
company["stock of company"]= 110;
console.log("Stock price is: "+ company["stock of company"])

//Creando Objetos de manera mas izi
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "Blue"    //sin coma, eso es importante
    },                      //aca sio va la coma
    $stock: 110,
    "Stock of company": 110
}; //asi creamos 

console.log(facebook)
console.log(facebook.ceo.firstName)

function multiply(x, y){
    return x * y;
}
console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.version);
//Las funciones son objetos
function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier * x
    };

    return myFunc;
}

var multiplyBy3= makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing functions as arguments
function doOperationOn(x,operation){
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result)

// Copy by Reference vs by Value
//Copy by Value
var a = 7; 
var b = a; //b sera igual a 7, sin embargo si cambio el valor de a, b seguira siendo 7
console.log("a: " + a);
console.log("b: " + b);

a = 5;
console.log("a: " + a);
console.log("b: " + b);
// a y b ya no valen igual

//Copy by Reference

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log(a);
console.log(b);
// a y b siguen valiendo lo mismo

// Pass by Reference vs by Value
function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);             //aca value sigue igual value=7

function changeObject(objValue){
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);
    objValue.x=5;
    console.log("after:");
    console.log(objValue);
}

value = { x: 7 };
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);            //aca value si cambio a x=5

//Otra manera de crear objetos
function test(){
    console.log("Hello Coursera!");
    console.log(this); //me indica donde apunta esta funcion
    this.myName = "Yaakov";
}
test();
console.log(window.myName)

//Function constructors
function Circle(radius){
    // body...
    this.radius = radius;
    console.log(this);
    //no podemos retornar nada, si usamos este metodo
}
Circle.prototype.getArea = function(){
        Math.PI * Math.pow(this.radius, 2);
    }

var myCircle = new Circle(10); // new Object();
console.log(myCircle)

var myOtherCircle = new Circle(20); // new Object();
console.log(myOtherCircle)

// Object literals and "this"
var literalCircle = { // new Object()
    radius: 10,
    getArea: function(){
        var self = this; //literal object, esto para que increaseRadius() funke
        console.log(this);
        var increaseRadius = function(){
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());

// Arrays en JavaScript
var array = new Array();
array[0]="Yaakov";
array[1]=2;
array[2]=function(name){
    console.log("Hello " + name);
};
array[3]={course:"HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
console.log(array[2]);
array[2]("Aldo");
array[2](array[0]);
console.log(array[3].course);

//Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i<names.length; i++){
    console.log("Hello " + names[i]);
}

names[100]= "Jim";

for (var i = 0; i<names.length; i++){
    console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
    name: "Yaakov",
    course: "HTML/CSS/JS",
    plataform: "Coursera"
};

for (var prop in myObj){
    console.log(prop + ": " + myObj[prop])
}

for (var name in names2){
    console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2){
    console.log("Hello " + names2[name]);
    //aparecera hello Hi! porque hace el for incluso en propiedades
}

// Closures 
function makeMultiplier (multiplier){

    function b(){
        console.log("Multiplier is: " + multiplier);
    }
    b();

    return (
        function (x){
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

//Fake Namespaces -> Lecture 52 -> IIFE
(function (){
    console.log("Hello Coursera!");
})(); //esos ultimos () envoca la función automaticamente, y puedo pasarle parametros

(function (name){
    console.log("Hello "+name);
})("Aldo"); //esos ultimos () envoca la función automaticamente, y puedo pasarle parametros
