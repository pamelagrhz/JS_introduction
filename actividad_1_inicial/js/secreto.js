/* 
Actividad: ¿Cuál es el número secreto?
*/

// No modifiques o elimines estas líneas de código. Te serviran de base para crear tu programa
// Completa el programa después del comentario TODO

console.log("Adivina cuál es el número secreto");

// Se genera el número secreto, entre 1 y 100, de forma aleatoria
var solucion = Math.floor(Math.random() * 100) + 1;

// Esta línea sirve sólo para verificar mejor el funcionamiento del programa
//console.log("(La solucion es " + solucion + ")");

// TODO: completa el programa
var a=0;
for (var c=0;c<6;c++)
{
a=a+1;
var n=prompt("Has realizado "+a+ " intentos. Introduce un número");
if(n==solucion){
	console.log("!Muy bien! la solución era " + solucion);
	console.log("Has necesitado "+ a + " intento(s).");
	c=5;
}
else if(n<solucion)
{
	console.log("El número secreto es mayor que "+ n);
}
else if(n>solucion)
{
	console.log("El número secreto es menor que "+ n);
}
}
if(a==6)
console.log("Has perdido :( la solución era "+ solucion);




