'use strict'

import renderEquipe from "./src/view/viewEquipe.js";
import renderInicio from "./src/view/viewInicio.js";
import renderSimulados from "./src/view/viewSimulados.js";
import renderGaleria from "./src/view/viewGaleria.js";

const inicio = document.getElementById("btn--inicio");
const simulados = document.getElementById("btn--simulados");
const equipe = document.getElementById("btn--equipe");
const galeria = document.getElementById("btn--galeria");
const principal = document.querySelector(".principal");

function renderContent(content) {
  principal.innerHTML = "";
  principal.insertAdjacentHTML("beforeend", content);
}

inicio.addEventListener("click", () => {
  renderContent(renderInicio());
});

equipe.addEventListener("click", () => {
  renderContent(renderEquipe());
});

simulados.addEventListener("click", () => {
  renderContent(renderSimulados());
});

galeria.addEventListener("click", () => {
  renderContent(renderGaleria());
});
