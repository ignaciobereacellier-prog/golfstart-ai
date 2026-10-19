"use strict";

const datosAmigos = {
  jugadores: [
    { nombre: "Carlos", nivel: 4, puntos: 2850 },
    { nombre: "Jorge", nivel: 4, puntos: 2630 },
    { nombre: "Pablo", nivel: 3, puntos: 2100 }
  ],
  // Progreso ilustrativo, independiente de los botones de puntos de Niveles.
  retos: [
    { titulo: "Completa tres entrenamientos esta semana", progreso: 1, objetivo: 3, unidad: "entrenamientos" },
    { titulo: "Practica putting durante tres días", descripcion: "Putting: hacer rodar la bola hacia el hoyo con el putter.", progreso: 2, objetivo: 3, unidad: "días" },
    { titulo: "Supera el cuestionario de reglas", progreso: 0, objetivo: 1, unidad: "cuestionarios" }
  ],
  mensaje: "Aquí se premia la constancia al aprender y practicar, no quién juega mejor al golf."
};
