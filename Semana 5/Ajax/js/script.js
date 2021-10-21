document.addEventListener("DOMContentLoaded",
    function (event) {
        //Unobstrusive event binding to the button
        document.querySelector("button").addEventListener("click", function(){ //esperamos el click del boton

            // Call server to get the name
            $ajaxUtils.sendGetRequest("data/name.json", function (res) {
                var message = res.firstName + " " + res.lastName;
                
                if(res.likesChineseFood) {
                    message += " likes Chinese food";
                }
                else{
                    message += " doesn't like Chinese food"
                }
                message += " and uses ";
                message += res.numberOfDisplays;
                message += " displays for coding.";                         
                console.log(message);
                document.querySelector("#content").innerHTML = "<h2>Hello " + message + "!"; //pongo el contenido en el div
            });            
        });
    }
);