const checkbox = document.getElementById("checkbox");
const boton = document.getElementById("enviar");

checkbox.addEventListener('change',check);

function check(){
    let enviar = document.getElementById("enviar");

    enviar.disabled = !this.checked;

    console.log(this.checked);
}