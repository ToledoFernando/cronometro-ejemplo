const $ = (id) => document.getElementById(id);
const $$ = (element) => document.createElement(element);
const body = document.body;
let run = false;

//======== Creamos los elementos =========//
const relojContainer = $$("div");
const reloj = $$("div");
let time = 0;
const newP = $$("p");
const parar = $$("button");
const iniciar = $$("button");
const reiniciar = $$("button");
const seguir = $$("button");
const buttons = $$("div");
//======== =================== =========//

//======== Agregamos clases para los estilos =========//
buttons.className = "buttons";
reiniciar.className = "reiniciar";
seguir.className = "Seguir";
parar.className = "parar";
iniciar.className = "iniciar";
newP.className = "number";
reloj.className = "reloj";
relojContainer.className = "container";
//======== ================================ =========//

//============== AGREGAMOS LOS TEXTOS ============//
iniciar.innerHTML = "iniciar";
newP.innerHTML = "00:00:00";
reiniciar.innerHTML = "reiniciar";
seguir.innerHTML = "Seguir";
parar.innerHTML = "parar";
//============ ==================================//

//======== Agregamos los elementos =============//
reloj.appendChild(newP);
relojContainer.appendChild(reloj);
buttons.appendChild(iniciar);
relojContainer.appendChild(buttons);
//======== =========================== =========//

// ============= LOGICA ===========

const getFormat = (segundos) => {
  let horas = Math.floor(segundos / 3600);
  let minutos = Math.floor((segundos % 3600) / 60);
  segundos = segundos % 60;
  return [horas, minutos, segundos]
    .map((v) => (v < 10 ? "0" + v : v))
    .join(":");
};

const timeRun = setInterval(() => {
  if (!run) return;
  time++;
  let newTime = getFormat(time);
  newP.innerHTML = newTime;
}, 1000);

//==================================

//================= EVENTOS ================//
iniciar.addEventListener("click", () => {
  run = true;
  buttons.appendChild(parar);
  buttons.appendChild(seguir);
  buttons.appendChild(reiniciar);
  buttons.removeChild(iniciar);
});

parar.addEventListener("click", () => (run = false));

seguir.addEventListener("click", () => (run = true));

reiniciar.addEventListener("click", () => {
  newP.innerHTML = "00:00:00";
  run = false;
  buttons.removeChild(parar);
  buttons.removeChild(seguir);
  buttons.removeChild(reiniciar);
  buttons.appendChild(iniciar);
});

//================= ======= ================//

//================= Agregamos el contenedor al DOM ==========//
body.appendChild(relojContainer);
