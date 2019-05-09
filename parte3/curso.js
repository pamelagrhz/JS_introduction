function hola(){
	return"HOLA";
}
var saludo= hola();
console.log(saludo);

function hola2(nombre, edad){//Ponemos un parametro que es nombre
	return "HOLA "+ nombre +" de "+ edad + " años" ;//concatenamos el saludo con el nombre
}
var saludos= hola2("Alejandro",21);//le damos un dato a el parametro dela funcion nombre
console.log(saludos);
/*
// Retorna el cuadrado de un número
function cuadrado(x) {
// completa el código de la función
return (x*x);
}

console.log(cuadrado(0)); // Salida: 0
console.log(cuadrado(2)); // Salida: 4
console.log(cuadrado(5)); // Salida: 25

function min(a,b){
	if(a>b)
		return b;
	else
		return a;

}

console.log(min(4.5, 5)); // Salida: 4.5
console.log(min(19, 9)); // Salida: 9
console.log(min(1, 1)); // Salida: 1*/

var Persona={
	nombre: "nombre",
	edad: 0,
	apellido: "apellido", 
	describir: function(){
		var describe= this.nombre+" " +this.apellido + " tiene "
					+ this.edad+ " años ";
		return describe;
	}
}

var persona1= Object.create(Persona);
var persona2= Object.create(Persona);
persona1.nombre="Alejandro";
persona1.apellido="Villaroel";
persona1.edad=21;
persona2.nombre="Pamela";
persona2.edad=21;
persona2.apellido="Ruíz";

console.log (persona1.describir());
console.log (persona2.describir());

// ARRAYS

var peliculas=["PELICULA1", ,"PELICULA3", "PELICULA4"];
console.log(peliculas.length);
peliculas.push("pelicula añadida con push");
peliculas[0]="cambiamos la pelicula0";
for(c=0;c<peliculas.length;c++){
	console.log(peliculas[c]);
}

var nombre ="Alejandro";
console.log(nombre.length);//9 letras 
console.log(nombre[0]);//A
console.log(nombre.toUpperCase());//ALEJANDRO
console.log(nombre.toLowerCase());//alejandro
console.log(nombre === "alejandro");//False
console.log(nombre.toUpperCase()==="alejandro".toUpperCase());//True

