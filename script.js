/* Modulo fyle system*/

var fs = require('fs')

/*
//readFileSync() es síncrono y bloquea la ejecución hasta que finalice.

var texto = fs.readFileSync('./texto.txt')

console.log('Archivo leido: ', texto.toString())
console.log('ultima linea de codigo')*/


/* readFile() son asíncronos y regresan a ejecutar las siguientes líneas de código, 
mientras la lectura funciona en segundo plano.


fs.readFile('./texto.txt',function(err,resp){
    if(err){
        console.log(err);
    } else{
        console.log('archivo leido: ',resp.toString());
        }
    })

console.log('ultima linea de codigo') */

/*Escritura de archivo .txt - writeFile

fs.writeFile('./texto_escribir.txt','hola mundo',function(err,resp){
    if(err){
        console.log(err)
    } else {
        console.log('archivo salvado')
    }
}) */


/* Modulo HTTP */

var http = require('http')
/*var html = fs.readFileSync('./index.html')

var servidor = http.createServer(function(req,res){
    res.write(html)
    res.end()
}).listen(8080)*/


/* Leer y escribir archivo html - readFile */


/* Leer y escribir archivo html - readFileSync */

/*
var html = fs.readFile('./index.html',function(err,html){
    http.createServer(function(req,res){
    res.write(html)
    res.end()
    }).listen(8080)
    
})*/

//Reto 1.1
/*
var numeros = ""

for(let i=0;i<=50;i++){
    if(i % 2 === 0) {
        numeros += i + ";"
    }}


fs.writeFile('./pares.csv',numeros,function(err){
    if(err){
        console.log(err)
    } else {
        console.log('archivo salvado')
    }

})*/

//Reto 1.2
/*
fs.readFile('pares.csv',function(err,res){
    if(err){console.log(err)}
    var pares = res.toString()
    console.log(pares)
    var paresArray = pares.split(';')
    console.log(paresArray)
    var paresPor2 = ""
    for (i of paresArray){
        paresPor2 += i*2 + ';'}
       
    fs.writeFile('pares_por_dos.csv', paresPor2,function(err){
        if(err){console.log(err)}
        console.log('pares por dos salvado')
    })
    
    })
    */

//Reto 2

fs.readFile('pares_por_dos.csv',function(err,resp){
    if(err){
        return console.log(err)
    }
    http.createServer(function(req,res){
        var tabla = "<table><tr><td>Posicion</td><td>Valor</td></tr>"
        var numerosFinal = resp.toString().split(';')
        console.log(numerosFinal)
        for (i in numerosFinal){
            tabla = tabla + "<tr><td>"+ i + "</td><td>" + numerosFinal[i] + "</td></tr>"
        }
        tabla = tabla + "</table>"
        res.write(tabla)
        res.end()
    }).listen(8080)
    
})