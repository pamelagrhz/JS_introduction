


//Mostrar contactos, agregar contacto, salir
console.log("Bienvenido a la gestion de contactos");//bienvenida

//contactos *******************************************************************************
	var contactos = [
			{
		    name: 'Pame',
		    ln: 'Ruiz'
			},
		    {
		    name: 'Alejandro',
		    ln: 'Villarroel'
			}];

// MOSTRAR CONTACTOS ***********************************************************************
	function muestra(){
		console.log("/************************************/");
		for (i=0; i<contactos.length;i++)
			{console.log("Nombre: "+contactos[i].name +", Apellido: " + contactos[i].ln);}
		console.log("/************************************/");
	}

//AGREGAR CONTACTOS *************************************************************************
	function agrega(){
		var nm=prompt("Introduce el nombre del nuevo contacto");
		var ap=prompt("Introduce el apellido del nuevo contacto");
	contactos.push({
    name: nm ,//despliega 
    ln: ap//despliega 
	})
}

//Menú **************************************************************************************
do{
console.log("1: Muestra la lista de contactos");
console.log("2: Añade un nuego contacto");
console.log("0: Salir");

var num= prompt("Elige una Opción");//despliega 
//opciones ***********************************************************************************
switch(num){
	case "0":
		console.log("Hasta pronto :)")
		break;
	case "1":
		console.log("Lista de contactos");
		console.log(muestra());
		break;
	case "2":
		console.log(agrega());
		console.log("El nuevo contacto de ha añadido a la lista");
		break;
	default:
		console.log("Opción indefinida");
		break;
	}
	}while(num!=0)











