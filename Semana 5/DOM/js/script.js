// Event handling
document.addEventListener("DOMContentLoaded", //Esto nos permite cargar el javascript despues del codigo HTML
    function(event){
        // DOM manipulation
        //document, nos permite manipular la pagina
        console.log(document.getElementById("title"));

        console.log(document instanceof HTMLDocument);

        function sayHello() {
            console.log(event); 
            console.log(this);  //esta apuntando a los atributos globales -> Window
            this.textContent= "Said it!";
            var name = document.getElementById("name").value; //le adjunto lo escrito en el input name
            //var message = "Hello " + name + "!"; //creo el mensaje
            //document.getElementById("content").textContent= message; //el mensaje lo coloco en el Div Content
            var message = "<h2>Hello " + name + "!</h2>"; //creo un codigo html
            document.getElementById("content").innerHTML= message; //el codigo html lo coloco en el Div Content

            if (name === "student"){
                var title = document.querySelector("#title").textContent; // using CSS selector, en vez de #title, puedo poner h1
                title += " Dale tilin!!!";
                document.querySelector("#title").textContent = title;
            }
        }

        // Unobstrusive event binding

        //seleccionamos el boton, y cuando lo clickeamos usamos la función sayHello
        //document.querySelector("button").addEventListener("click", sayHello); 

        //misma función
        document.querySelector("button").onclick = sayHello;

        //Si presiono Shift, se vera las coordinadas del mouse en la consola
        document.querySelector("body").addEventListener("mousemove",
            function (event){
                if(event.shiftKey === true){
                    console.log("X: " + event.clientX);
                    console.log("Y: " + event.clientY);
                }
            }
        );
    }
);