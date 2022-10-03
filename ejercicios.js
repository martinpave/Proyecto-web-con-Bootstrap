
pregunta = prompt("Quieres saber el precio de la consulta, cirugias, vacunas o nuestra Ubicacion?");

switch(pregunta){
   case "Consulta":
    alert("La consulta esta $2000 y si hay que medicar se cobra aparte");
       break;
       
   case "Vacunas":
    alert("La Sextuple, Quintuple y Triple estan $2500 y la Rabia $1900.");
       break;
   case "Cirujias":
    alert("Para saber estos precios llamar al 4761 8308");
       break;
   case  "Ubicacion":
    alert("Estamos en Roca 3095, Vicente Lopez.");
       break;
   default:
    alert("Muchas gracias por elegirnos")	
}

let calificacion = 11;

calificacion = prompt("Como puntuarias nuestra atencion? (1 al 10)");


if( calificacion < 5 && calificacion >= 0 ){
    alert("Lamentamos que hayas tenido una mala experiencia con nosotros, por favor comunicate al 4761 8308 para poder brindarte una mejor atencion.");
}else if( calificacion > 5 && calificacion <= 8 ){
    alert("Gracias!");
}else if( calificacion > 8 && calificacion <= 10 ){
    alert("Muchas gracias por esa califacion.");
}else{
    alert("Calificación no valida");
}