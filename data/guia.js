"use strict";

// Base: docs/golfstart-ai-partes-1-y-2.md y docs/06_ia_y_contenidos.md.
// Los documentos definen los temas, pero no incluyen artículos completos.
// REVISAR: Ignacio debe validar estas explicaciones iniciales, especialmente reglas y glosario.
const apartadosGuia = [
  { titulo: "Primeros pasos", puntos: [
    "Empieza en una zona de prácticas o una academia para familiarizarte con el golf.",
    "Pregunta por una clase de iniciación: un profesor puede ayudarte con el agarre y la postura.",
    "Aprende poco a poco; no necesitas conocer todos los términos el primer día."
  ] },
  { titulo: "Material", puntos: [
    "Antes de comprar, pregunta si puedes usar palos prestados o de alquiler.",
    "No necesitas un juego completo de palos para probar este deporte.",
    "Consulta al centro qué material ofrece y qué ropa y calzado permite."
  ] },
  // REVISAR: resumen introductorio; no es una explicación completa de las reglas oficiales.
  { titulo: "Reglas básicas", puntos: [
    "El objetivo es llevar la bola desde la zona de salida hasta el hoyo con el menor número de golpes.",
    "Cuenta los golpes de cada hoyo; algunas situaciones añaden golpes de penalización.",
    "Juega la bola como reposa, salvo cuando una regla permita o exija otra cosa.",
    "Si pierdes una bola o tienes dudas sobre una penalización, pide ayuda antes de continuar."
  ] },
  { titulo: "Palos de golf", puntos: [
    "El driver se utiliza habitualmente para golpes largos desde la salida.",
    "Las maderas y los híbridos ayudan a cubrir distancias largas; los hierros se usan para distintas distancias.",
    "Los wedges sirven para golpes cortos y altos, como algunos golpes de aproximación al hoyo.",
    "El putter permite hacer rodar la bola, principalmente en el green: la zona de hierba muy corta alrededor del hoyo."
  ] },
  { titulo: "Vocabulario", puntos: [
    "Aprende estos términos poco a poco; no hace falta memorizarlos todos.",
    "Par, birdie y bogey describen el resultado de un hoyo respecto a sus golpes de referencia.",
    "El hándicap representa la capacidad de juego; los puntos de la app representan progreso educativo."
  ], glosario: [
    { termino: "Par", definicion: "Número de golpes de referencia de un hoyo." },
    { termino: "Birdie", definicion: "Terminar un hoyo con un golpe menos que su par." },
    { termino: "Bogey", definicion: "Terminar un hoyo con un golpe más que su par." },
    { termino: "Hándicap (handicap)", definicion: "Índice de capacidad de juego que permite competir entre personas de distinto nivel." },
    { termino: "Green", definicion: "Zona de hierba muy corta que rodea el hoyo, donde se suele hacer rodar la bola con el putter." },
    { termino: "Tee", definicion: "Puede referirse a la zona de salida o al pequeño soporte sobre el que se coloca la bola para el golpe de salida." },
    { termino: "Búnker (bunker)", definicion: "Zona de arena preparada que forma parte del recorrido." },
    { termino: "Fairway", definicion: "Calle de hierba corta entre la salida y la zona del hoyo." }
  ] },
  { titulo: "Funcionamiento de un campo", puntos: [
    "Un recorrido suele tener 9 o 18 hoyos, cada uno con su zona de salida y su hoyo.",
    "El tee es la zona de salida; el fairway es la calle de hierba corta por la que avanzas.",
    "El green es la zona de hierba muy corta alrededor del hoyo; los búnkers son zonas de arena.",
    "Sigue las indicaciones del campo sobre el recorrido, el orden de juego y el ritmo del grupo."
  ] },
  { titulo: "Consejos para principiantes", puntos: [
    "Trabaja primero el agarre, la postura y el contacto con la bola antes de buscar más distancia.",
    "Dedica tiempo al juego corto: los golpes de aproximación y los que hacen rodar la bola hacia el hoyo.",
    "Respeta a las demás personas y comprueba que nadie esté en peligro antes de golpear.",
    "Descansa cuando lo necesites y consulta a un profesor para corregir tu técnica."
  ] }
];
