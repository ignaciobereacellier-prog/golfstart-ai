"use strict";

const datosNiveles = {
  claveGuardado: "golfstart-progreso-demo-v1",
  puntosIniciales: 950,
  niveles: [
    { nombre: "Fundamentos", umbral: 0, insignia: "Fundamentos completados" },
    { nombre: "Distancia y dirección", umbral: 500, insignia: "Control completado" },
    { nombre: "Juego corto y approach", umbral: 1500, insignia: "Juego corto completado" },
    { nombre: "Putting", umbral: 2500, insignia: "Putting completado" },
    { nombre: "Estrategia en el campo", umbral: 3500, insignia: null }
  ],
  actividades: [
    { texto: "He completado un entrenamiento (+100)", puntos: 100 },
    { texto: "He terminado una lección (+50)", puntos: 50 },
    { texto: "He superado el cuestionario de reglas (+50)", puntos: 50 }
  ]
};
