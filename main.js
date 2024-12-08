
function logincompania(){

 alert("bievenido a nuestra tienda , inicie sesion para ingresar");

let intentos= 1;

let identificar= true;

do{

let usuario = prompt("Ingrese su nombre de usuario");



if(usuario===null){
    alert("Ingrese un nombre válido")
    break
}

if(usuario === "fabrizio aguilar" && intentos<=3){
    let pass = prompt("ingrese su contraseña")
        if(pass===null){
            alert("Ingrese contraseña correcta")
            break
        }
        if(pass==="fabrizio"){
        alert("Bievenido usuario " + usuario + " a nuestra tienda online")
        identificar =false
        }else{
            alert("contraseña incorrecta");
            intentos++
            if(intentos>3){
                alert("No puede iniciar sesion , intente mas tarde")
                break
            }
        }
}


}while(identificar===true);


}

logincompania();
