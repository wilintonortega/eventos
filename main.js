const boton=document.querySelector("button");
boton.onclick=function () {
    alert("Hola, estimado usuario---");
}

const boton2=document.querySelector(".atributo");
const hacer=()=>alert("hola con setattribute");
boton2.setAttribute("onclick","hacer()")