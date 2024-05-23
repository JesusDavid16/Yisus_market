const $tiempo = document.querySelector('.tiempo');
const $fecha = document.querySelector('.fecha');

function reloj(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['Domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let showSemana = (semana [diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}/${mes}/${anio}`;
}
setInterval(() =>{
    reloj()
},1000);