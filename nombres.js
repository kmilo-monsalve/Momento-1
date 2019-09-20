const fs = require('fs');

console.log("Escribe tu nombre (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log("Tu nombre es: " + dato);
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    //process.stdin.destroy();

    if(dato.toString().trim() != "NaN"){
        console.log("Procederé a crear los saludos");
        var tabla = "";
        
        for (let index = 0; index <= 0; index++) {
            tabla += "hola " + dato + "\n";
            tabla += "hello " + dato;
        }
        
        fs.writeFile(
            `tabla de ${ dato }.txt` , 
            tabla, 
            (err) => {
                if (err) 
                    throw err;
                console.log(`Tabla del ${ dato } creada con éxito.`);
            }
        );
    }
    
});