"use strict";

const videoSwing = document.querySelector("#video-swing");

function pausarSwing() {
  videoSwing.pause();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) pausarSwing();
});

const botones = document.querySelectorAll("[data-pantalla]");
const pantallas = document.querySelectorAll("main > section");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    cambiarPantalla(boton.dataset.pantalla);
  });
});

function cambiarPantalla(destino) {
    if (destino !== "inicio") pausarSwing();

    pantallas.forEach((pantalla) => {
      pantalla.hidden = pantalla.id !== destino;
    });

    botones.forEach((pestana) => {
      if (pestana.dataset.pantalla === destino) {
        pestana.setAttribute("aria-current", "page");
      } else {
        pestana.removeAttribute("aria-current");
      }
    });

    document.querySelector(`#${destino} h1`).focus();
}

const mensajes = document.querySelector("#mensajes");
const formularioChat = document.querySelector("#formulario-chat");
const entradaPregunta = document.querySelector("#pregunta");
const preguntasRapidas = document.querySelector("#preguntas-rapidas");
const verPreguntas = document.querySelector("#ver-preguntas");

function mostrarPreguntas(mostrar) {
  preguntasRapidas.hidden = !mostrar;
  document.querySelector("#titulo-preguntas").hidden = !mostrar;
  verPreguntas.hidden = mostrar;
  verPreguntas.setAttribute("aria-expanded", String(mostrar));
}

verPreguntas.addEventListener("click", () => {
  mostrarPreguntas(true);
  preguntasRapidas.querySelector("button").focus({ preventScroll: true });
  preguntasRapidas.scrollIntoView({ block: "center" });
});

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function buscarRespuesta(pregunta) {
  const texto = normalizar(pregunta);
  let mejor = null;
  let mejorPuntuacion = 0;
  respuestasChat.forEach((opcion) => {
    if (texto === normalizar(opcion.pregunta)) {
      mejor = opcion;
      mejorPuntuacion = Infinity;
      return;
    }
    const puntuacion = opcion.claves.reduce((total, clave) => {
      const palabras = normalizar(clave);
      return total + ((` ${texto} `).includes(` ${palabras} `) ? palabras.split(" ").length : 0);
    }, 0);
    if (puntuacion > mejorPuntuacion) {
      mejor = opcion;
      mejorPuntuacion = puntuacion;
    }
  });
  return mejor;
}

function agregarMensaje(autor, texto) {
  const mensaje = document.createElement("p");
  mensaje.className = `mensaje mensaje-${autor === "Tú" ? "usuario" : "asistente"}`;
  const nombre = document.createElement("strong");
  nombre.textContent = `${autor}: `;
  mensaje.append(nombre, document.createTextNode(texto));
  mensajes.append(mensaje);
}

function responder(pregunta, respuestaElegida) {
  const texto = pregunta.trim();
  if (!texto) return;
  const opcion = respuestaElegida || buscarRespuesta(texto);
  agregarMensaje("Tú", texto);
  agregarMensaje("GolfStart AI", opcion ? opcion.respuesta : respuestaNoEncontrada);
  mostrarPreguntas(!opcion);
  entradaPregunta.value = "";
  mensajes.scrollTop = mensajes.scrollHeight;
  if (opcion) {
    verPreguntas.focus({ preventScroll: true });
  } else {
    entradaPregunta.focus({ preventScroll: true });
  }
}

respuestasChat.forEach((opcion) => {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = opcion.pregunta;
  boton.addEventListener("click", () => responder(opcion.pregunta, opcion));
  preguntasRapidas.append(boton);
});

formularioChat.addEventListener("submit", (evento) => {
  evento.preventDefault();
  responder(entradaPregunta.value);
});

const tarjetasGuia = document.querySelector("#tarjetas-guia");
const detalleGuia = document.querySelector("#detalle-guia");
let tarjetaAbierta = null;

apartadosGuia.forEach((apartado) => {
  const tarjeta = document.createElement("button");
  tarjeta.type = "button";
  tarjeta.className = "tarjeta-guia";
  tarjeta.textContent = apartado.titulo;
  tarjeta.setAttribute("aria-controls", "detalle-guia");
  tarjeta.addEventListener("click", () => {
    tarjetaAbierta = tarjeta;
    document.querySelector("#titulo-apartado").textContent = apartado.titulo;
    const lista = document.querySelector("#puntos-guia");
    lista.replaceChildren();
    apartado.puntos.forEach((texto) => {
      const punto = document.createElement("li");
      punto.textContent = texto;
      lista.append(punto);
    });
    const glosario = document.querySelector("#glosario-guia");
    glosario.replaceChildren();
    glosario.hidden = !apartado.glosario;
    (apartado.glosario || []).forEach((entrada) => {
      const termino = document.createElement("dt");
      const definicion = document.createElement("dd");
      termino.textContent = entrada.termino;
      definicion.textContent = entrada.definicion;
      glosario.append(termino, definicion);
    });
    tarjetasGuia.hidden = true;
    detalleGuia.hidden = false;
    document.querySelector("#titulo-apartado").focus();
  });
  tarjetasGuia.append(tarjeta);
});

document.querySelector("#volver-guia").addEventListener("click", () => {
  detalleGuia.hidden = true;
  tarjetasGuia.hidden = false;
  tarjetaAbierta.focus();
});

document.querySelector("#preguntar-guia").addEventListener("click", () => {
  cambiarPantalla("inicio");
  mostrarPreguntas(true);
  entradaPregunta.focus();
});

let puntosDemo = datosNiveles.puntosIniciales;
const avisoGuardado = document.querySelector("#aviso-guardado");

try {
  const guardado = localStorage.getItem(datosNiveles.claveGuardado);
  if (guardado !== null) {
    const valor = JSON.parse(guardado);
    if (Number.isSafeInteger(valor) && valor >= datosNiveles.puntosIniciales) puntosDemo = valor;
  }
} catch {
  avisoGuardado.textContent = "No se ha podido recuperar el progreso. Puedes seguir usando la demo.";
}

function calcularProgreso(puntos) {
  let actual = 0;
  datosNiveles.niveles.forEach((nivel, indice) => {
    if (puntos >= nivel.umbral) actual = indice;
  });
  const siguiente = datosNiveles.niveles[actual + 1];
  const inicio = datosNiveles.niveles[actual].umbral;
  return {
    actual,
    siguiente,
    porcentaje: siguiente ? Math.floor((puntos - inicio) / (siguiente.umbral - inicio) * 100) : 100
  };
}

function pintarProgreso() {
  const progreso = calcularProgreso(puntosDemo);
  const formato = new Intl.NumberFormat("es-ES");
  document.querySelector("#resumen-nivel").textContent = `${formato.format(puntosDemo)} puntos · Nivel ${progreso.actual + 1}`;
  document.querySelector("#etiqueta-progreso").textContent = progreso.siguiente
    ? `Progreso hasta el nivel ${progreso.actual + 2}: ${progreso.porcentaje} %`
    : "Has alcanzado el último nivel de la demo";
  document.querySelector("#progreso-nivel").value = progreso.porcentaje;
  document.querySelector("#siguiente-nivel").textContent = progreso.siguiente
    ? `Te faltan ${formato.format(progreso.siguiente.umbral - puntosDemo)} puntos para ${progreso.siguiente.nombre}.`
    : "Sigue practicando a tu ritmo. No hay más niveles en esta demo.";
  const lista = document.querySelector("#lista-niveles");
  const insignias = document.querySelector("#insignias");
  lista.replaceChildren();
  insignias.replaceChildren();
  datosNiveles.niveles.forEach((nivel, indice) => {
    const item = document.createElement("li");
    const titulo = document.createElement("strong");
    titulo.textContent = `${indice + 1}. ${nivel.nombre}`;
    const estado = document.createElement("p");
    estado.textContent = indice < progreso.actual ? "Completado" : indice === progreso.actual ? "En curso" : "Bloqueado";
    const umbral = document.createElement("p");
    umbral.textContent = `Desde ${formato.format(nivel.umbral)} puntos`;
    if (indice === progreso.actual) item.setAttribute("aria-current", "step");
    item.append(titulo, estado, umbral);
    lista.append(item);
    if (indice < progreso.actual && nivel.insignia) {
      const insignia = document.createElement("li");
      insignia.textContent = nivel.insignia;
      insignias.append(insignia);
    }
  });
  pintarClasificacion();
}

function guardarProgreso() {
  try {
    localStorage.setItem(datosNiveles.claveGuardado, JSON.stringify(puntosDemo));
    avisoGuardado.textContent = "Progreso guardado en este navegador.";
  } catch {
    avisoGuardado.textContent = "El navegador no permite guardar el progreso. Se conservará solo mientras esta página siga abierta.";
  }
}

datosNiveles.actividades.forEach((actividad) => {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "boton-guia";
  boton.textContent = actividad.texto;
  boton.addEventListener("click", () => {
    if (!Number.isSafeInteger(puntosDemo + actividad.puntos)) return;
    puntosDemo += actividad.puntos;
    guardarProgreso();
    pintarProgreso();
  });
  document.querySelector("#acciones-progreso").append(boton);
});

document.querySelector("#reiniciar-demo").addEventListener("click", () => {
  puntosDemo = datosNiveles.puntosIniciales;
  guardarProgreso();
  pintarProgreso();
});

pintarProgreso();

function obtenerClasificacion(puntos) {
  return [
    ...datosAmigos.jugadores,
    { nombre: "Tú", nivel: calcularProgreso(puntos).actual + 1, puntos, propio: true }
  ].sort((a, b) => b.puntos - a.puntos);
}

function pintarClasificacion() {
  const lista = document.querySelector("#clasificacion");
  lista.replaceChildren();
  obtenerClasificacion(puntosDemo).forEach((jugador, indice) => {
    const fila = document.createElement("li");
    if (jugador.propio) fila.className = "jugador-propio";
    const nombre = document.createElement("strong");
    nombre.textContent = `${indice + 1}. ${jugador.nombre}`;
    const detalle = document.createElement("span");
    detalle.textContent = `Nivel ${jugador.nivel} · ${new Intl.NumberFormat("es-ES", { useGrouping: true }).format(jugador.puntos)} puntos`;
    fila.append(nombre, detalle);
    lista.append(fila);
  });
}

document.querySelector("#mensaje-constancia").textContent = datosAmigos.mensaje;
datosAmigos.retos.forEach((reto, indice) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-reto";
  const titulo = document.createElement("h3");
  titulo.textContent = reto.titulo;
  tarjeta.append(titulo);
  if (reto.descripcion) {
    const descripcion = document.createElement("p");
    descripcion.textContent = reto.descripcion;
    tarjeta.append(descripcion);
  }
  const etiqueta = document.createElement("label");
  etiqueta.htmlFor = `reto-${indice}`;
  etiqueta.textContent = `${reto.progreso} de ${reto.objetivo} ${reto.unidad} · ${reto.progreso >= reto.objetivo ? "Completado" : "En curso"}`;
  const barra = document.createElement("progress");
  barra.id = `reto-${indice}`;
  barra.max = reto.objetivo;
  barra.value = reto.progreso;
  tarjeta.append(etiqueta, barra);
  document.querySelector("#retos-semanales").append(tarjeta);
});
