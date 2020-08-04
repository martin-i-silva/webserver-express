const http = require('http')

// Esto recibe un callback que recibe un request o solicitudes junto con las respuestas de nuestro servidor
http.createServer((req, res)=>{
    
    res.writeHead(200, {'Content-Type': 'application/json'})
    //res.write('Hola Mundo!');

    let salida = {
        nombre: 'Martin',
        edad: 35,
        url: req.url
    }

    res.write(JSON.stringify(salida))
    res.end();
}) 
.listen(8080);

console.log('Escuchando el puerto 8080')