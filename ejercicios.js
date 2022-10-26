let pregunta = prompt("Quieres saber el precio de la consulta, cirugias, vacunas o nuestra Ubicacion? (s-salir)");

while(pregunta!="s"){
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
     pregunta = prompt("Quieres saber el precio de la consulta, cirugias, vacunas o nuestra Ubicacion? (s-salir)");
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




const ListaPrecios = [
    {
        
        nombre:"Consulta",
        precio: 2500,
    },
    {
        
        nombre:"Vacuna Quintuple",
        precio: 2500,
    },
    {
        
        nombre:"Vacuna Sextuple",
        precio: 2500,
    },
    {
        
        nombre:"Vacuna triple",
        precio: 2500,
    },
    {
        
        nombre:"Vacuna Rabia",
        precio: 1900,
    },
     {
        
        nombre:"Vacuna Rabia",
        precio: 1900,
    },
]

for(const producto of ListaPrecios){
    console.log("La "+producto.nombre+"  esta  $"+producto.precio);
}





let contacto = document.getElementById("#contacto")
contacto.onclick=()=>{hacerClick()};
function hacerClick(){
    console.log("El numero de telefono es 4761-8308 y el correo es cmvetroca@gmail.com")
}


let ubicacion = document.getElementById("ubicacion")
ubicacion.onclick=()=>{hacerClick2()};
function hacerClick2(){
    console.log("La direccion es Roca 3095, entre calles Blas Parera y Rosetti")
}



let cambiarColor = document.getElementById("#contacto");
cambiarColor.onclick=()=>{hacerClick3()};
function hacerClick3(){
cambiarColor.innerHTML = `
<a href="tel:47618308" class="btn btn-danger btn-lg px-4 me-sm-3" id="#contacto">Contacto</a>
`;
}



let cambiarColor2 = document.getElementById("ubicacion");
cambiarColor2.onclick=()=>{hacerClick4()};
function hacerClick4(){
cambiarColor2.innerHTML = `
<a href="https://www.google.com.ar/maps/place/Centro+m%C3%A9dico+veterinario+Roca/@-34.5358215,-58.5034025,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb6d3c0b2099d:0x852c255c395169ad!8m2!3d-34.5358047!4d-58.5011691" target="_blank" class="btn btn-outline-secondary btn-danger btn-lg px-4" id="ubicacion">Ubicacion</a>
`;
}