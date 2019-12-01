var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
	var nombre = "";
	var apellido = "";
	var edad = "";

	res.render('/prueba',{nombre, apellido, edad});
});

app.post('/agregar', function(req, res){
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var edad = req.body.edad;
    var bandera = false;


	if(nombre=="" || !nombre){
		bandera = true;
	}
	if(apellido=="" || !apellido){
		bandera = true;
	}
	if(edad=="" || !edad){
		bandera = true;
	}
	if(!bandera){
		res.render('datosForm', {nombre, apellido, edad});
	}else{
        res.send("Ingresaste:  <br>"+nombre+"<br>"+apellido+"<br>"+edad+"<br>Error,por favor ingresa todos los datos");
	}
});

app.listen(3000, function(){
	console.log("Servidor escuchando en el puerto 3000");
});
